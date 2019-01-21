import { Theme } from "../../config/Theme";
import Utils from "../../utils/Utils";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.index = options.index;
    let data = getApp().globalData.data;
    let item = data[this.index];
    this.id = item.id;
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
    this.resetData();
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

  goEdit: function (event) {
    let navigateUrl = '../edit/edit?index=' + this.data.index;
    wx.navigateTo({
      url: navigateUrl
    });
  },

  resetData: function() {
    let data = getApp().globalData.data;
    let item = Utils.getItemById(data, this.id);
    this.setData({
      item,
      index: this.index,
      titleColor: item.color ? 'white' : 'black'
    });
  }
})
