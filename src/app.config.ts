// import img1 from './assets/tabbar/1_on.png'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/club/index',
    'pages/qrcode/index',
    'pages/order/index',
    'pages/my/index',
    'pages/test1/index', // 跳转测试页面
    'pages/test2/index', // 跳转测试页面
    'pages/test3/index', // 跳转测试页面
  ],
  entryPagePath: 'pages/index/index',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#000000",
    list:[
      {
        pagePath: 'pages/index/index',
        text:"首页",
        iconPath: 'assets/tabbar/1.png',
        // iconPath: img1,
        selectedIconPath: 'assets/tabbar/1_on.png',
      },
      {
        pagePath: 'pages/club/index',
        text: '俱乐部',
        iconPath: "assets/tabbar/2.png",
        selectedIconPath: 'assets/tabbar/2_on.png',
      },
      {
        text: '扫码',
        pagePath: 'pages/qrcode/index',
        iconPath: "assets/tabbar/3.png",
        selectedIconPath: 'assets/tabbar/3.png',
        middle: true,
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
        iconPath: "assets/tabbar/4.png",
        selectedIconPath: 'assets/tabbar/4_on.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: "assets/tabbar/5.png",
        selectedIconPath: 'assets/tabbar/5_on.png',
      },
    ]
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示',
    },
    'scope.record': {
      desc: '小程序需要你的语音权限'
    }
  },
  requiredBackgroundModes: ['audio', 'location'],
})
