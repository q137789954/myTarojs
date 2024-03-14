import React, { createContext, useReducer } from "react";
import { useLaunch, Current } from "@tarojs/taro";
import { ActionType, TabBarsType, StateType } from "./type";

const initialState: StateType = {
  tabBars: [] as TabBarsType,
  selectedId: '',
  dispatch: (() => {}) as React.Dispatch<ActionType>,
};

export const Context = createContext(initialState);

const reduce = (state: StateType, action: ActionType) => {
  const { type, payload } = action;

  switch (type) {
    case "updateTabBars":
      const { tabBars } = payload;
      const tabBarsNew = tabBars.map((item) => {
        const { pagePath } = item;
        const newPagePath = `/${pagePath}`;
        return {
          ...item,
          id: newPagePath,
          pagePath: newPagePath,
        };
      });
      return { tabBars: tabBarsNew, selectedId: tabBarsNew[0].pagePath };

    case "updateSelected":
      const { tabBars: stateTabBars } = state;
      const { selectedUrl } = payload;
      const selects = stateTabBars.filter(
        (item) => item.pagePath === selectedUrl
      );

      return { ...state, selectedId: selects[0].pagePath };
    default:
      throw new Error();
  }
};

const TaberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const { selectedId, tabBars } = state;

  useLaunch(() => {
    dispatch({
      type: "updateTabBars",
      payload: {
        // @ts-ignore
        tabBars: Current.app.config.tabBar.list,
      },
    });
  });

  return (
    <Context.Provider
      value={{
        selectedId,
        tabBars,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TaberProvider;
