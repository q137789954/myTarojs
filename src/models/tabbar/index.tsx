import { useState, useCallback, createContext } from "react";

export interface BarInterface {
  id: number;
  icon: string;
  text: string;
  middle?: boolean;
  url: string;
}

interface ContextValue {
  list: Array<BarInterface>,
  id: number,
  recomposeTabbarId: Function
}

const list: Array<BarInterface> = [
  {
    id: 0,
    icon: "icon-xingji",
    text: "首页",
    url: "/pages/index/index",
  },
  {
    id: 1,
    icon: "icon-zhaomu",
    text: "俱乐部",
    url: "/pages/club/index",
  },
  {
    id: 2,
    icon: "icon-saoma",
    text: "扫码",
    middle: true,
    url: "/pages/qrcode/index",
  },
  {
    id: 3,
    icon: "icon-dangan",
    text: "订单",
    url: "/pages/order/index",
  },
  {
    id: 4,
    icon: "icon-wode",
    text: "我的",
    url: "/pages/my/index",
  },
];

export const Context = createContext<ContextValue>({
  list,
  id: 0,
  recomposeTabbarId: () => {}
});

const TaberProvider = ({ children }) => {

  const [id, setId] = useState(0);
  const recomposeTabbarId = useCallback((url:string) => {

    const selects = list.filter((item) => item.url === url);
    selects.length && setId(selects[0].id);

  }, [setId]);

  return (
    <Context.Provider
      value={{
        id,
        list,
        recomposeTabbarId
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TaberProvider;
