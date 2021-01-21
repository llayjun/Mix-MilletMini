// work.js
var http = require('../../utils/httputils.js')
const baseUrl = require('../const/config.js').baseUrl
// 获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 1,
    isHideLoadMore: false,
    recomTask: [],
  },

  // 点击跳转到任务详情
  taskClick(e) {
    var id = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: '../task_detial/task_detial?taskId='+id
    })
  },

  // 获取列表
  getTaskList: function(refresh = true) {
    var prams = {
      pageNum: this.data.index,
      pageSize: 10
    }
    http.postRequest(baseUrl + 'api/app/task/getMerchantTaskListPage' , prams,
          (res) => {
            if(res.code == 0) {
              this.setData({
                recomTask: this.data.recomTask.concat(res.data.records),
              })
            }
            wx.stopPullDownRefresh()
          },
          (err) => {
            wx.showToast({
              title: '发生错误',
              icon: 'none',
            })
            wx.stopPullDownRefresh()
          }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTaskList()
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
    this.data.index = 1
    this.data.recomTask = []
    this.getTaskList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    ++this.data.index 
    this.getTaskList(false)
    this.setData({
      isHideLoadMore: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})