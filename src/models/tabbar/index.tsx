import { useState, useCallback, createContext, useEffect } from "react";
import { switchTab } from "@tarojs/taro";

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
  to: (url:string) => void
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
  to: () => {},
});

const TaberProvider = ({ children }) => {
  const [id, setId] = useState(0);

  const to = useCallback((url:string) => {

    const selects = list.filter((item) => item.url === url);
    if (selects.length) {
      switchTab({
        url: url,
        success() {
          setId(selects[0].id);
        },
      });
    } else {
      setId(-1);
    }
  }, [setId]);

  return (
    <Context.Provider
      value={{
        id,
        list,
        to,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TaberProvider;
