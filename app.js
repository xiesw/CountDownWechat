import {Theme} from "./config/Theme";
import DateUtil from "./utils/DateUtil";

App({

  globalData:{
    data: [
      {
        timestamp: 1555689600000,
        color: "#51B7F4",
        top: false,
        repeat: "once",
        name: "参数"
      },
      {
        timestamp: 1550937600000,
        color: "#CF81E1",
        top: true,
        repeat: "once",
        name: "过年"
      },
      {
        timestamp: 1555171200000,
        color: "#51B7F4",
        top: true,
        repeat: "once",
        name: "哈哈"
      }
    ]
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.sortData();
    this.handleData();
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

  loadData: function() {
    
  },

  saveData: function(data) {
    if(data.id != undefined) {

    } else {
      this.globalData.data.push(data);
    }
    this.sortData();
    this.handleData();
  },

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
