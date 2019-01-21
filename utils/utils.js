export default class Utils {

  /**
   * 移除数组里的项
   * @param arr
   * @param item
   */
  static removeArrayItem(arr, item) {
    if (!arr) {
      return
    }
    let index = arr.indexOf(item);

    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  /**
   * 通过时间戳移除数组数据
   * @param arr
   * @param item
   */
  static removeArrayByTimeStamp(arr, item) {
    if (!arr) {
      return
    }
    let index = -1;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (arr[i].timestamp === item.timestamp) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  /**
   * 通过id移除数组数据
   * @param arr
   * @param item
   */
  static removeArrayById(arr, item) {
    if (!arr) {
      return
    }
    let index = -1;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (arr[i].id === item.id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  /**
   * 通过id 查找item
   */
  static getItemById(arr, id) {
    if (!arr) {
      return
    }
    let index = -1;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (arr[i].id === id) {
        return arr[i];
        break;
      }
    }
    return null;
  }

  /**
   * 生成16位随机id
   */
  static createId() {
    return Math.random().toString(36).substr(2);
  }

}

