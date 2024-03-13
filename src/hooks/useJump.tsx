import { useCallback } from "react";
import {
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
} from "@tarojs/taro";
import useTabbatContext from "@/models/tabbar/useTabbatContext";

type ToProps = string | number | CustomLink.CustomLinkOptions;

const useJump = () => {

  const { recomposeTabbarId, list } = useTabbatContext();

  const jump = useCallback((props: ToProps) => {
  
  
    if (typeof props === "string") {
      // 只传入地址
  
      const result = list.some((item) => item.url === props);
      if (result) {
        // 判断是否tarbar类型跳转
        recomposeTabbarId(props);
        switchTab({
          url: props
        })
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
      if (props.delta) {
        realType = "navigateBack";
      } else if( list.some((item) => item.url === (props as CustomLink.NavigateToOption | CustomLink.SwitchTab).url )){
        realType = 'switchTab';
      } else {
        realType = 'navigateTo';
      }
    }
  
    if(realType === 'switchTab') {
      recomposeTabbarId(props.url);
    }

    navigateApi[realType](option)
  
  }, [])

  return {jump}
}

export default useJump;
