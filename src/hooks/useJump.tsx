import { useCallback } from "react";
import {
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
} from "@tarojs/taro";
import useTabbatContext from "@/models/tabbar/useTabbatContext";

type ToProps =
  | string
  | number
  | (Taro.switchTab.Option & { type?: string })
  | (Taro.reLaunch.Option & { type: string })
  | (Taro.redirectTo.Option & { type: string })
  | (Taro.navigateTo.Option & { type?: string })
  | (Taro.navigateBack.Option & { type?: string });

const useJump = () => {
  const { dispatch, tabBars } = useTabbatContext();

  const jump = useCallback((props: ToProps) => {
    if (typeof props === "string") {
      // 只传入地址

      const result = tabBars.some((item) => item.pagePath === props);
      if (result) {
        // 判断是否tarbar类型跳转
        dispatch({
          type: "updateSelected",
          payload: {
            selectedUrl: props,
          },
        });
        switchTab({
          url: props,
        });
      } else {
        // 普通跳转
        navigateTo({ url: props });
      }
      return "";
    }

    // 判断是否返回类型跳转
    if (typeof props === "number") {
      navigateBack({ delta: props });
      return "";
    }

    // props 为对象，解析对方，判断跳转类型

    const navigateApi = {
      navigateTo: navigateTo,
      navigateBack: navigateBack,
      switchTab: switchTab,
      reLaunch: reLaunch,
      redirectTo: redirectTo,
    };

    const { type, ...option } = props;

    let realType = type;

    if (!realType) {
      // delta
      if ((props as Taro.navigateBack.Option).delta) {
        realType = "navigateBack";
      } else if (
        tabBars.some(
          (item) => item.pagePath === (props as Taro.switchTab.Option).url
        )
      ) {
        realType = "switchTab";
      } else {
        realType = "navigateTo";
      }
    }

    if (realType === "switchTab") {
      dispatch({
        type: "updateSelected",
        payload: {
          selectedUrl: (props as Taro.switchTab.Option).url,
        },
      });
    }

    navigateApi[realType](option);
  }, []);

  return { jump };
};

export default useJump;
