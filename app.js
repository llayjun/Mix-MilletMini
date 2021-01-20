// app.js
App({
  onLaunch() {
    // 获取状态栏高度
    const res = wx.getSystemInfoSync()
    var statusbarH = res.statusBarHeight
    this.globalData.statusbarHeight = statusbarH

    // 右上角胶囊信息
    var data = wx.getMenuButtonBoundingClientRect()
    this.globalData.menuRect = data

    console.log(this.globalData.statusbarHeight)
    console.log(this.globalData.menuRect.height)
    this.globalData.topMargin = this.globalData.statusbarHeight + this.globalData.menuRect.height

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // token
    const token = wx.getStorageSync('token') || []
    console.log("token: " + token)
    // 判断是否免登录
    if(token != '' && token != null) {
      wx.navigateTo({
        url: '/pages/merchant_detail/merchant_detail',
        fail(ex){
          // fail can not redirectTo a tabbar page"
          console.log(ex)
          wx.switchTab({
            url: '/pages/merchant_detail/merchant_detail',
          })
        }
      })
    }

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    statusbarHeight: 0,
    menuRect: null,
    topMargin: 0
  }
})
