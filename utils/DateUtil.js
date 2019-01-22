/**
 * Created by xieshangwu on 2018/3/11.
 * 时间工具类
 */

export default class DateUtil {
  /**
   * 根据时间戳返回日期和星期
   * @param timestamp
   * @returns {string} 2009-1-2 星期二
   */
  static getDataAndWeek(timestamp) {
    let date = new Date();
    date.setTime(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let week = date.getDay();
    return year + '-' + month + '-' + day + ' 星期' + weekArray[week];
  }

  /**
   * 根据时间戳返回日期
   * @param timestamp
   * @returns {string} 2009-1-2
   */
  static getDate(timestamp) {
    let date = new Date();
    date.setTime(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return year + '-' + month + '-' + day
  }

  /**
   * 根据时间戳返回非0最大单位的时间
   * @param timestamp
   * @returns {string}
   */
  static getBiggestTime(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let day = Math.floor(time / 1000 / 60 / 60 / 24);
    let hour = Math.floor(time / 1000 / 60 / 60);
    let minute = Math.floor(time / 1000 / 60);
    let second = Math.floor(time / 1000);
    if (day > 0) {
      return timestamp - Date.now() > 0 ? day + 1 : day;
    } else if (hour > 0) {
      return hour;
    } else if (minute > 0) {
      return minute;
    } else if (second > 0) {
      return second;
    } else {
      return 0;
    }
  }

  /**
   * 返回最大显示时间的单位
   * @param timestamp
   * @returns {string}
   */
  static getBiggestTimeUnit(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let day = Math.floor(time / 1000 / 60 / 60 / 24);
    let hour = Math.floor(time / 1000 / 60 / 60);
    let minute = Math.floor(time / 1000 / 60);
    let second = Math.floor(time / 1000);
    if (day > 0) {
      return '天';
    } else if (hour > 0) {
      return '时';
    } else if (minute > 0) {
      return '分';
    } else if (second > 0) {
      return '秒';
    } else {
      return '';
    }
  }

  /**
   * 返回总天数
   * @param timestamp
   * @returns {string}
   */
  static getDaysCount(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let day = Math.floor(time / 1000 / 60 / 60 / 24);
    return day;
  }

  /**
   * 返回小时
   * @param timestamp
   * @returns {string}
   */
  static getHour(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let hour = Math.floor((time / (1000 * 60 * 60)) % 24);
    return hour < 10 ? '0' + hour : hour;
  }

  /**
   * 返回分钟
   * @param timestamp
   * @returns {string}
   */
  static getMinute(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let minute = Math.floor((time / (1000 * 60)) % 60);
    return minute < 10 ? '0' + minute : minute;
  }

  /**
   * 返回秒
   * @param timestamp
   * @returns {string}
   */
  static getSecond(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let second = Math.floor((time / 1000) % 60);
    return second < 10 ? '0' + second : second;
  }

  /**
   * 返回毫秒(随机)
   * @param timestamp
   * @returns {string}
   */
  static getMillisecond(timestamp) {
    let time = Math.abs(timestamp - Date.now());
    let millisecond = Math.abs(Math.floor((time % 1000) / 10) - Math.floor(Math.random() * 10));
    return millisecond < 10 ? '0' + millisecond : millisecond;
  }

  /**
   * 是否过期
   * @param timestamp
   * @returns {boolean}
   */
  static isOverdue(timestamp) {
    return timestamp < Date.now();
  }

  /**
   * 获取今天零点时间戳
   */
  static getTodayTimeStamp() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let newDate = new Date(year + '/' + month + '/' + day);
    return newDate.getTime();
  }

  /**
   * 获得某天零点的时间戳
   */
  static getZeroTimeStamp(timestamp) {
    let date = new Date();
    date.setTime(timestamp)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let newDate = new Date(year + '/' + month + '/' + day);
    return newDate.getTime();
  }

  /**
   * 获取今年剩余时间百分比
   * @returns {number}
   */
  static getRemainOfYear() {
    let date = new Date();
    let year = date.getFullYear();

    let d = new Date(`${year}/1/1`);
    let passTime = Date.now() - d.getTime();

    return (1 - (passTime / (365 * 24 * 60 * 60 * 1000))) * 100;
  }

  /**
   * 根据日期获取时间戳
   */
  static getTimeStamp(dateStr) {
    let date = new Date(dateStr.replace(/-/g, '/'));
    return date.getTime();
  }

}

const weekArray = ['日', '一', '二', '三', '四', '五', '六',];