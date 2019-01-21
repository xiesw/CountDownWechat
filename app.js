import {Theme} from "./config/Theme";
import DateUtil from "./utils/DateUtil";

const dataKey = 'localData';
App({

  globalData:{
    data: []
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.loadData();
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  /**
   * 加载数据
   */
  loadData: function (msg)  {

  },

  /**
   * 保存数据
   */
  saveData: function(data, index) {
    if (index != undefined) {
      this.globalData.data[index] = data;
    } else {
      this.globalData.data.push(data);
    }
    this.saveDataToLocal();
  },

  deleteData: function (index) {
    this.globalData.data.splice(index, 1);
    this.saveDataToLocal();
  },

  setTop: function (index) {
    this.globalData.data[index].top = !this.globalData.data[index].top;
    this.saveDataToLocal();
  },

  saveDataToLocal() {
    let dataStr = JSON.stringify(this.globalData.data);
    wx.setStorage({
      key: dataKey,
      data: dataStr
    })

    this.sortData();
    this.handleData();
  },

  /**
   * 数据排序
   */
  sortData: function () {
    let sortFun = (obj1, obj2) => {
      let isOverDue1 = DateUtil.isOverdue(obj1.timestamp);
      let isOverDue2 = DateUtil.isOverdue(obj2.timestamp);
      if (obj1.top !== obj2.top) {
        return obj2.top - obj1.top;
      } else if (isOverDue1 !== isOverDue2) {
        return isOverDue1 - isOverDue2;
      } else {
        return isOverDue1 ? obj2.timestamp - obj1.timestamp : obj1.timestamp - obj2.timestamp;
      }
    };
    let sortList = this.globalData.data;
    sortList.sort(sortFun);
  },

  /**
   * 数据生成
   */
  handleData: function () {
    let list = this.globalData.data;
    list.forEach((item) => {
      let isOverdue = DateUtil.isOverdue(item.timestamp);
      item.date = DateUtil.getDataAndWeek(item.timestamp);
      item.time = DateUtil.getBiggestTime(item.timestamp);
      item.unit = DateUtil.getBiggestTimeUnit(item.timestamp);
      item.title = isOverdue ?
        item.name + ' 已经' : '距离 ' + item.name + ' 还有';
      item.stateColor = isOverdue ? Theme.color.lightCyan : Theme.color.orange;
    });
  }
})
