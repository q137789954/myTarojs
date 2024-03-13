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
        text:"首页"
      },
      {
        pagePath: 'pages/club/index',
        text: '俱乐部'
      },
      {
        pagePath: 'pages/qrcode/index',
        text: '扫码'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
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
