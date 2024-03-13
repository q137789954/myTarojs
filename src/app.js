import { PropsWithChildren, useEffect, useState } from 'react'
import { useLaunch, useDidShow, getCurrentInstance } from '@tarojs/taro'
import TabBarProvider from './models/tabbar'
import './app.less'

// : PropsWithChildren<any>)

function App({ children }) {

  // console.log(process.env.TARO_ENV, '啊啊啊啊啊啊啊啊');
  const [path, setPath] = useState('');
  const instance = getCurrentInstance().router;
  console.log(location.href)


  useEffect(() => {
    /**
     * 路由发生了变化
     * 但是只能监听到第一次切换
     */
    console.log('instance 发生了变化', instance);
  }, [instance])

  useLaunch(() => {
    console.log('App launched.')
  })

  // return children

  // children 是将要会渲染的页面
  return <TabBarProvider>{children}</TabBarProvider>
}

export default App
