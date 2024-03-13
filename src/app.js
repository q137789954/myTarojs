import { PropsWithChildren, useEffect, useState } from 'react';
import { useLaunch, useDidShow, getCurrentInstance, Current } from '@tarojs/taro';
import TabBarProvider from './models/tabbar';
import useTabbatContext from '@/models/tabbar/useTabbatContext';
import './app.less'

// App({ children }): PropsWithChildren<any>)

function App({ children }) {

  const { dispatch, setAAA, selectedId } = useTabbatContext()
  // return children

  // useEffect(() => {
  //   console.log(Current.app.config.tabBar.list, selectedId, setAAA,  'Current');
  //   setAAA(Current.app.config.tabBar.list)
  //   dispatch({
  //     type: 'updateTabBars',
  //     payLoad: {
  //       tabBars: Current.app.config.tabBar.list
  //     }
  //   })
  // }, [Current.app.config.tabBar.list])

  // useDidShow((options) => {
  //   console.log(Current.app.config.tabBar.list, selectedId, setAAA,  'Current');
  //   setAAA(Current.app.config.tabBar.list)
  //   dispatch({
  //     type: 'updateTabBars',
  //     payLoad: {
  //       tabBars: Current.app.config.tabBar.list
  //     }
  //   })
  // })

  // children 是将要会渲染的页面
  return <TabBarProvider>{children}</TabBarProvider>
}

export default App
