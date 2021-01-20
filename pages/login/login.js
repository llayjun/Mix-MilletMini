// login.js
var http = require('../../utils/httputils.js')
const baseUrl = require('../const/config.js').baseUrl
// 获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMargin: app.globalData.topMargin,
    userName: '',
    passWord: '',
    isCheck: false
  },

  // 注册
  registerClick() {
    wx.showToast({
      title: '注册',
      icon: 'succes',
      duration: 1000,
      mask:true
  })
  },

  //用户名和密码输入框事件
  userNameInput:function(e) {
    this.setData({
      userName:e.detail.value
    })
  },

  passWordInput:function(e) {
    this.setData({
      passWord:e.detail.value
    })
  },

  checkboxChange: function(e) {
    this.setData({
      isCheck: !this.data.isCheck
    })
  },

  // 点击登录
  bindHomeTap() {
    if(this.data.userName == '') {
      wx.showToast({
        title: '请输入账号',
        icon: 'none',
      })
      return
    }
    if(this.data.passWord == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
      })
      return
    }
    if(this.data.isCheck == false) {
      wx.showToast({
        title: '请同意协议',
        icon: 'none',
      })
      return
    }
    var prams = {
      mobile: this.data.userName,
      passWord: this.data.passWord
    }
    http.postRequest(baseUrl + 'api/app/users/userLogin' , prams,
          function(res) {
            if(res.code != 0) {
              wx.showToast({
                title: res.msg,
                icon: 'none',
              })
            } else {
              wx.setStorageSync('token', res.data.authorization)
              wx.redirectTo({
                url: '/pages/home/home',
                fail(ex){
                  // fail can not redirectTo a tabbar page"
                  console.log(ex)
                  wx.switchTab({
                    url: '/pages/home/home',
                  })
                }
              })
            }
          },
          function(err) {
            wx.showToast({
              title: '发生错误',
              icon: 'none',
            })
          }
    )
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})