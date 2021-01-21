// my.js
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
    myTopImageList: [
      {'imageId': 'ic_my_top_1', 'name': '实名信息'},
      {'imageId': 'ic_my_top_2', 'name': '我的协议'},
      {'imageId': 'ic_my_top_3', 'name': '个人简历'},
      {'imageId': 'ic_my_top_4', 'name': '收款方式'},
    ],
    myTaskImageList: [
      {'imageId': 'ic_apply_1', 'name': '已申请'},
      {'imageId': 'ic_apply_2', 'name': '申请通过'},
      {'imageId': 'ic_apply_3', 'name': '进行中'},
      {'imageId': 'ic_apply_4', 'name': '已完成'},
      {'imageId': 'ic_apply_5', 'name': '已结算'},
    ],
    myHelpImageList: [
      {'imageId': 'ic_help_1', 'name': '客服咨询'},
      {'imageId': 'ic_help_2', 'name': '投诉建议'},
      {'imageId': 'ic_help_3', 'name': '关于我们'},
      {'imageId': 'ic_help_3', 'name': '退出登录'},
    ],
  },

  // 退出登录
  loginOut(e) {
    if(e.currentTarget.dataset['index'] == 3) {
      wx.showModal({
        title: '',
        content: '是否确认退出',
        success(res) {
         if (res.confirm) {
            console.log('用户点击确定' + e)
            wx.setStorageSync('token', '')
            wx.reLaunch({
              url: '../login/login'
            })
         } else if (res.cancel) {
            console.log('用户点击取消')
         }
        }
       })
    }
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