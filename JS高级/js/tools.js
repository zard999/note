/*
 * @name: 工具类函数集合
 * @author: zyh
 * @vresion: 1.0
 * @description:
 * @dateTime: 2021/9/12
 */
// /// 选择对象类型
// function checkType(value) {
// 	return Object.prototype.toString.call(value).toLowerCase().slice(8, -1);
// }

var commonTools = {
  /*
   * @name: 检测类型
   */
  myTypeof: function (value) {
    var type = typeof value;
    var toStr = Object.prototype.toString;
    var res = {
      "[object Array]": "array",
      "[object Object]": "object",
      "[object String]": "object string",
      "[object Number]": "object number",
      "[object Boolean]": "object boolean",
      "[object Date]": "object date",
      "[object RegExp]": "object regexp",
    };
    if (value === null) {
      // 处理null
      return "null";
    } else if (type === "object") {
      // 处理object
      var ret = toStr.call(value);
      return res[ret];
    } else {
      return type;
    }
  },
  // 节流函数
  // 让一些高频率触发的时间的核心代码的执行频率低一些，提高浏览器的效率
  // 在一段时间内只执行第一次的核心代码
  throttle: function (fn, time) {
    var lastTime = 0;
    return function (e) {
      var nowTime = Date.now();
      if (nowTime - lastTime < time) {
        return;
      }
      lastTime = nowTime;
      fn.call(this, e);
    };
  },
  // 防抖：一段时间内只执行最后一次
  debounce: function (fn, time) {
    var timer = null;
    return function (e) {
      var e = e || window.event;
      // 清除延时器
      clearTimeout(timer);
      // 延时执行
      timer = setTimeout(
        function () {
          fn.call(this, e);
        }.bind(this),
        time
      );
    };
  },

  // 深拷贝
  deepClone: function (origin) {
    if (this.checkType(origin) === "object") {
      var target = {};
    } else if (this.checkType(origin) === "array") {
      var target = [];
    } else {
      return origin;
    }
    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        target[key] = this.deepClone(origin[key]);
      }
    }
    return target;
  },

  // 判断对象类型
  checkType: function (obj) {
    return Object.prototype.toString.call(obj).toLowerCase().slice(8, -1);
  },

  //模板字符串的正则
  tplReg: function () {
    return /{{(.*?)}}/g;
  },

  // 去掉前后空格
  trimSpace: function (str) {
    return str.replace(/\s/g, "");
  },
};

// 数组重写forEach
Array.prototype.jForEach = function (fn) {
  var arr = this,
    len = arr.length,
    arg = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    fn.apply(arg, [arr[i], i, arr]);
  }
};

// HTMLCollection重写forEach方法
HTMLCollection.prototype.jForEach = function (fn) {
  var arr = this,
    len = arr.length,
    arg = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    fn.apply(arg, [arr[i], i, arr]);
  }
};

// 重写数组filter方法, 用深拷贝
Array.prototype.jFilter = function (fn) {
  var arr = this,
    len = arr.length,
    arg = arguments[1] || window,
    newArr = [],
    nItem;

  for (var i = 0; i < len; i++) {
    nItem = commonTools.deepClone(arr[i]);
    fn.apply(arg, [nItem, i, arr]) ? newArr.push(nItem) : "";
  }
  return newArr;
};

// 重写数组的reduce方法
Array.prototype.jReduce = function (fn, initialVal) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[2] || window;
  for (var i = 0; i < len; i++) {
    initialVal = fn.apply(arg2, [initialVal, arr[i], i, arr]);
  }
  return initialVal;
};
