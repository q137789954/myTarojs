import { useCallback } from "react";
import {
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
} from "@tarojs/taro";
import useTabbatContext from "@/models/tabbar/useTabbatContext";

/**
 * @param
 * 参数为 string，默认 navigateTo｜switchTab  跳转类型
 * 参数为 number， 默认 navigateBack 类型跳转
 * 参数为 object，navigateTo｜switchTab｜navigateBack 类型跳转 type字段为可选， 余下字段同tarojs路由跳转API传参
 */

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
    // 参数为string 为switchTab｜navigateTo 跳转类型
    if (typeof props === "string") {
      // 判断是否 switchTab 跳转类型
      const result = tabBars.some((item) => item.pagePath === props);
      if (result) {
        // 跳转tarbar页面前，改变tarbar选中项
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
        // navigateTo 跳转类型
        navigateTo({ url: props });
      }
      return "";
    }

    // 判断是否是返回类型跳转
    if (typeof props === "number") {
      navigateBack({ delta: props });
      return "";
    }


    let { type: realType, ...option } = props;

    // switchTab｜ navigateTo｜navigateBack type字段选填，此处补全跳转类型
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

    // 跳转tabbar页面前，修改tabbar选中状态
    if (realType === "switchTab") {
      dispatch({
        type: "updateSelected",
        payload: {
          selectedUrl: (props as Taro.switchTab.Option).url,
        },
      });
    }

    const navigateApi = {
      navigateTo: navigateTo,
      navigateBack: navigateBack,
      switchTab: switchTab,
      reLaunch: reLaunch,
      redirectTo: redirectTo,
    };

    navigateApi[realType](option);
  }, []);

  return { jump };
};

export default useJump;
