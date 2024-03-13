import { PropsWithChildren, useEffect, useState } from 'react'
import { useLaunch, useDidShow, getCurrentInstance } from '@tarojs/taro'
import TabBarProvider from './models/tabbar'
import './app.less'

// App({ children }): PropsWithChildren<any>)

function App({ children }) {

  // return children

  // children 是将要会渲染的页面
  return <TabBarProvider>{children}</TabBarProvider>
}

export default App
