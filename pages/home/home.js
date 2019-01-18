import DateUtil from "../../utils/DateUtil";
import { Theme } from "../../config/Theme";

Page({

  onShow: function () {
    let app = getApp();
    this.setData({
      list: app.globalData.data
    });
  },

  goDetail: function (event) {
    let navigateUrl = '../detail/detail?id='+event.currentTarget.dataset.id;
    wx.navigateTo({
      url: navigateUrl
    });
  },

  goEdit: function (event) {
    let navigateUrl = '../edit/edit?id='+event.currentTarget.dataset.id;
    wx.navigateTo({
      url: navigateUrl
    });
  }
});
