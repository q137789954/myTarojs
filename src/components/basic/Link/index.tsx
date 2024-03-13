import React from 'react';
import useJump from '@/hooks/useJump';


type PropsInterface = {
    children: React.ReactNode,
    className?: string,
} &  CustomLink.CustomLinkOptions

/**
 * @CustomLinkOptions 说明
 * @type 跳转类型 'navigateTo'| 'navigateBack' | 'switchTab' | 'reLaunch' | 'redirectTo'
 * 当跳转类型为 navigateTo，navigateBack, switchTab 可不传入
 * 其余参数 同Taro 5种路由跳转参数
 */

const Link = (props: PropsInterface) => {
    

    const { children, className, ...option } = props;
    const {jump} = useJump();
    

    const handleJump = () => {
        jump(option)
    }
    


    return (
        <span className={className} onClick={handleJump}>
            {children}
        </span>
    )
}

export default Link;