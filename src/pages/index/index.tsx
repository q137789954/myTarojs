import { useLoad, useDidShow, getCurrentInstance, getTabBar } from '@tarojs/taro';
import Banner from './components/Banner';
import UserCard from './components/UserCard';
import ServiceContent from './components/ServiceContent';
import NavBar from './components/NavBar';
import './index.less';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    console.log(10000000)
    const pageObj = getCurrentInstance().page;
    const tabbar = getTabBar(pageObj);
    console.log(pageObj, tabbar, '这里是学习，暂留')
  });

  // console.log(process);

  return (
    <div className='index'>
      <Banner />
      <div className='content'>
        <UserCard />
        <ServiceContent />
        <NavBar />
      </div>
    </div>
  )
}
