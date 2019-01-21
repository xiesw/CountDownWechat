import { Theme } from "../../config/Theme";
import DateUtil from "../../utils/DateUtil";
import Utils from "../../utils/Utils";

Page({

  /**
  * 页面的初始数据
  */
  data: {
    date: DateUtil.getDate(Date.now()),
    top: false,
    title: '',
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
    if (options.index != undefined) {
      let item = getApp().globalData.data[options.index];
      this.setData({
        index: options.index,
        title: item.name,
        top: item.top,
        color:item.color,
        date: DateUtil.getDate(item.timestamp),
        id: item.id,
      })
    }
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

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
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
    let app = getApp();
 
    app.saveData({
      name: data.title,
      color: data.markColor,
      top: data.top,
      timestamp: DateUtil.getTimeStamp(data.date),
      id: this.data.id || Utils.createId()
    }, this.data.index)
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
