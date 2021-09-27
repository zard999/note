(function () {
  var Tar = function () {
    this.oTar = document.querySelector(".J_tar");
    this.oItem = document.querySelectorAll(".item");
    this.oPage = document.querySelector(".J_page");
    // 初始filed为all
    this.filed = "all";
    // 获取data
    this.data = JSON.parse(document.querySelector("#data").innerHTML);
    // 获取模板
    this.tabTpl = document.querySelector("#tpl").innerHTML;
    // 获取搜索框
    this.oInp = document.querySelector('.search input');
  };

  Tar.prototype = {
    // 初始化函数
    init: function () {
      this.render(this.choseData(this.filed));
      this.bindEvnet();
    },

    // 绑定事件
    bindEvnet: function () {
      this.oTar.addEventListener("click", this.tabClick.bind(this), false);
      this.oInp.addEventListener('keyup', this.keyUp.bind(this), false);
    },

    // 渲染页面
    render: function (data) {
      // 首先创建一个字符串装要插入的内容
      var list = "";
      // 遍历data,改变this指向为模板内容
      data.jForEach(function (item, index) {
        // 每次加上替换的内容
        list += this.replace(/{{(.*?)}}/g, function (node, key) {
          return {
            course: item.course,
            classes: item.classes,
            img: item.img,
            teacher: item.teacher,
            style: item.is_free === "1" ? "free" : "vip",
            is_free: item.is_free === "1" ? "免费" : "VIP",
          }[key];
        });
      }, this.tabTpl);
      this.oPage.innerHTML = list;
    },

    // 点击事件
    tabClick: function (e) {
      var e = e || window.event,
        tar = e.target || e.srcElement,
        tarName = tar.tagName.toLowerCase();

      // 判断点击元素的名字是否是a的
      if ((tarName = "a")) {
        // 获取a的父元素
        var parent = tar.parentNode;
        // 排他
        this.oItem.forEach(function (item, index) {
          item.classList.remove("cur");
        });
        parent.classList.add("cur");

        // 筛选数据
        this.filed = parent.dataset.filed;

        this.render(this.choseData(this.filed));
      }
    },

    // 筛选数据
    choseData: function (flied) {
      return this.data.jFilter(function (item, index) {
        switch (flied) {
          case "all":
            return true;
            break;
          case "free":
            return item.is_free === "1";
            break;
          case "vip":
            return item.is_free === "0";
            break;
          default: {
            return true;
          }
        }
      });
    },

    // 搜索功能
    keyUp: function(){
      var oInpValue = this.oInp.value;
      var initValue = [];
      this.data.jReduce(function(prev, cur, index){
          var res = cur.course.indexOf(oInpValue);
          if (res !== -1){
            prev.push(cur);
          }
          return prev;
      }, initValue);
      
      // 重新渲染页面
      if (initValue.length <= 0){
        this.oPage.innerHTML = '';
        this.oPage.innerHTML = noSearchInfo();
      }else{
        this.render(initValue);
      }

    },
  };

  // 未搜索到页面
  function noSearchInfo(){
    return '<p style="text-align: center; line-height: 100px">-- 未搜索到页面 --</p>'
  }

  window.Tar = Tar;
})();

new Tar().init();
