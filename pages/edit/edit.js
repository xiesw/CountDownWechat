import { Theme } from "../../config/Theme";
import DateUtil from "../../utils/DateUtil";

Page({

  /**
  * 页面的初始数据
  */
  data: {
    date: '2019/1/2',
    markColors: [
      Theme.color.red,
      Theme.color.yellow,
      Theme.color.blue,
      Theme.color.purple,
      Theme.color.green,
      Theme.color.gray
    ]
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

  },

  submit: function (e) {
    if (!this.checkData(e.detail.value)) {
      return;
    };
    this.save(e.detail.value);
    this.goBack();
  },

  checkData: function (data) {
    if (!data.title) {
      wx.showToast({
        title: '请输入标题',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    return true;
  },

  save: function(data) {
    console.log(data);
    let app = getApp();
 
    app.saveData({
      name: data.title,
      color: data.markColor,
      top: data.top,
      timestamp: DateUtil.getTimeStamp(data.date)
    })
  },

  cancel: function() {
    this.goBack();
  },

  goBack: function() {
    wx.navigateBack({
      delta: 1
    })
  }

})
