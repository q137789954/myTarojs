import React, {
  createContext,
  useReducer,
} from "react";
import { useDidShow, Current } from '@tarojs/taro';
import { ActionType, TabBarsType, StateTyPe } from './type'


const initialState: StateTyPe = {
  tabBars: [] as TabBarsType,
  selectedId: -1,
  dispatch: (() => {}) as React.Dispatch<ActionType>
}

export const Context = createContext(initialState);

const reduce = (state: StateTyPe, action: ActionType) => {

  const { type, payload } = action;

  switch (type) {
    case "updateTabBars":
      const { tabBars } = payload;
      const tabBarsNew = tabBars.map((item, index) => {
        const { pagePath } = item;
        return {
          ...item,
          id: index,
          pagePath: `/${pagePath}`,
        };
      });
      return { tabBars: tabBarsNew,  selectedId: tabBarsNew[0].id};

    case "updateSelected":

        const { tabBars: stateTabBars } = state
      const { selectedUrl } = payload;
      const selects = stateTabBars.filter((item) => item.pagePath === selectedUrl);

      return {...state, selectedId: selects[0].id}
    default:
      throw new Error();
  }
};

const TaberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const { selectedId, tabBars } = state;

  useDidShow(() => {
    dispatch({
      type: 'updateTabBars',
      payload: {
        tabBars: Current.app.config.tabBar.list
      }
    })
  })

  return (
    <Context.Provider
      value={{
        selectedId,
        tabBars,
        dispatch: dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TaberProvider;
