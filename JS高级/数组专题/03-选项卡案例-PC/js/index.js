(function () {
  var Tar = function () {
    this.tab = document.getElementsByClassName("J_tab")[0];
    this.tabItemLk = document.getElementsByClassName("course-tab-item-lk");
    this.data = JSON.parse(document.getElementById("data").innerHTML);
    this.filed = "all";
    this.tabTpl = document.getElementById("J_courseTabTpl").innerHTML;
    this.cardList = document.getElementsByClassName("J_card_list")[0];
    this.oInp = document.getElementById("J_inp");
    this.firstLk = this.tabItemLk[0];
  };
  Tar.prototype = {
    init: function () {
      this.render(this.setData(this.filed));
      this.bindEvent();
    },

    bindEvent: function () {
      this.tab.addEventListener("click", this.tabClick.bind(this), false);
      this.oInp.addEventListener("keyup", this.searchKeyup.bind(this), false);
    },

    render: function (data) {
      var list = "";
      data.jForEach(function (item, index) {
        list += this.replace(commonTools.tplReg(), function (node, key) {
          return {
            course: item.course,
            img: item.img,
            classes: item.classes,
            is_free: item.is_free === "1" ? "免费" : "VIP",
          }[key];
        });
      }, this.tabTpl);
      this.cardList.innerHTML = list;
    },

    tabClick: function (e) {
      var e = e || window.event,
        tar = e.tar || e.srcElement,
        tarName = tar.tagName.toLowerCase();
      if (tarName === "a") {
        this._checkClass(tar);
      }
    },

    searchKeyup: function () {
      var value = this.oInp.value,
        len = value.length;
      if (len <= 0) {
        this._checkClass(this.firstLk);
      }else{
          var rd = this.setSearchData(value),
              len = rd.length;
              if (len <= 0){
                this.cardList.innerHTML = '';
                this.cardList.innerHTML = mb();
              }else{
                this.render(rd);
              }
      }
    },

    // 切换tab
    _checkClass: function (tar) {
      this.filed = tar.getAttribute("data-filed");
      this.tabItemLk.jForEach(function (item, index) {
        item.className = "course-tab-item-lk";
      });
      tar.className += " current";
      this.render(this.setData(this.filed));
    },

    // 设置免费和vip的数据
    setData: function (filed) {
      return this.data.jFilter(function (item, index) {
        switch (filed) {
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

    // 设置搜索的数据
    setSearchData: function(value){
        return this.data.jReduce(function(prev, cur, index){
            var res = cur.course.indexOf(this);
            if (res !== -1){
                prev.push(cur);
            }
            return prev;
        }, [], value)
    }
  };

  function mb(){
      return ('<p class="tip">-- 数据未找到 --</p>');
  }

  window.Tar = Tar;
})();

new Tar().init();
