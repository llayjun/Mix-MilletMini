// home.js
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
    imgUrls: [], // 轮播图
    recomMerchant: [], // 推荐企业
    recomTask: [], // 推荐任务
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },

  // 图片预览
  preview(event) {
    console.log(event.target.dataset.src)
    console.log(this.data.imgUrls)
    let currentUrl = event.target.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgUrls.map(i => i.imageUrl) // 需要预览的图片http链接列表
    })
  },

  // 点击跳转到企业详情
  merchantClick(e) {
    var id = e.currentTarget.dataset['index']
    wx.navigateTo({
      url: '../merchant_detail/merchant_detail?merchantId='+id
    })
  },

  // 点击跳转到任务详情
  taskClick(e) {
    var id = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '../task_detial/task_detial?taskId='+id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('aaaa' + wx.getStorageSync('token'))
    // 轮播图
    http.getRequest(baseUrl + 'api/app/banner/getBannerList' , null,
          (res) => {
            if(res.code == 0) {
              this.setData({
                imgUrls: res.data
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
    // 推荐企业
    http.getRequest(baseUrl + 'api/app/merchant/getMerchantList' , null,
          (res) => {
            if(res.code == 0) {
              this.setData({
                recomMerchant: res.data
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
    // 推荐任务
    http.getRequest(baseUrl + 'api/app/task/getMerchantTaskList' , null,
          (res) => {
            if(res.code == 0) {
              this.setData({
                recomTask: res.data
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
    wx.stopPullDownRefresh()
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
    this.onLoad()
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