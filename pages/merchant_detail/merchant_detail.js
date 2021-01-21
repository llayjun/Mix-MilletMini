var http = require('../../utils/httputils.js')
const baseUrl = require('../const/config.js').baseUrl
// 获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    merchantDetail: null,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },

  // 图片预览
  preview(event) {
    console.log(event.target.dataset.src)
    console.log(this.data.merchantDetail.merchantPicList)
    let currentUrl = event.target.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.merchantDetail.merchantPicList.map(i => i.picture) // 需要预览的图片http链接列表
    })
  },

  // 点击跳转到任务详情
  taskClick(e) {
    var id = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '../task_detial/task_detial?taskId='+id
    })
  },

  // 获取列表
  getMerchantDetail: function(merchantId) {
    var prams = {
      merchantId: merchantId,
    }
    http.postRequest(baseUrl + 'api/app/merchant/getMerchantDetail' , prams,
          (res) => {
            if(res.code == 0) {
              this.setData({
                merchantDetail: res.data
              })
            }
          },
          (err) => {
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
    this.getMerchantDetail(options.merchantId)
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