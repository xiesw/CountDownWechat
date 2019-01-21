import DateUtil from "../../utils/DateUtil";
import { Theme } from "../../config/Theme";
const dataKey = 'localData';
Page({
  data: {
    list: []
  },
  
  onLoad: function(options) {
    let app = getApp();
    wx.getStorage({
      key: dataKey,
      success: (res) => {
        app.globalData.data = JSON.parse(res.data);
        app.sortData();
        app.handleData();
        this.setData({
          list: app.globalData.data
        });
      }
    })
  },

  onShow: function () {
    this.resetData();
  },

  resetData: function() {
    let app = getApp();
    this.setData({
      list: app.globalData.data
    });
  },

  goDetail: function (event) {
    let navigateUrl = '../detail/detail?index='+event.currentTarget.dataset.id;
    wx.navigateTo({
      url: navigateUrl
    });
  },

  goEdit: function (event) {
    let navigateUrl = '../edit/edit';
    wx.navigateTo({
      url: navigateUrl
    });
  },

  longPress: function(event) {
    let index = event.currentTarget.dataset.id;
    let item = getApp().globalData.data[index];
    let topStr = item.top? '取消置顶' : '置顶';
    wx.showActionSheet({
      itemList: [topStr, "删除"],
      success : (res) => {
        switch (res.tapIndex) {
          case 0:
            getApp().setTop(index);
            break;
          case 1:
            getApp().deleteData(index);
            break;
        }
        this.resetData();
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
});
