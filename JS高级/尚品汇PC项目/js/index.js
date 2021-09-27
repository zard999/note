//放大镜和缩略图数据
thumbnailData();
function thumbnailData() {
  var data = goodData.imgsrc;
  var oList = document.querySelector(".prescroll .listOut .list");

  data.forEach(function (item, index) {
    var newLi = document.createElement("li");
    var oImg = new Image();
    oImg.src = item.s;
    newLi.appendChild(oImg);
    oList.appendChild(newLi);
  });
}

// 放大镜
preview();
function preview() {
  // 获取小图区域
  var oSmallArea = document.querySelector(".smallArea");
  // 获取蒙版
  var oMask = document.querySelector(".mask");
  // 获取小图图片
  var oSmallAreaImg = document.querySelector(".smallArea img");
  // 获取大图区域
  var oBigArea = document.querySelector(".bigArea");
  // 获取大图图片
  var oBigAreaImg = document.querySelector(".bigArea img");

  // 绑定move事件
  oSmallArea.onmousemove = function (e) {
    var e = e || window.event;
    // 开启蒙版mask
    oMask.style.display = "block";
    // 开启放大区域
    oBigArea.style.display = "block";

    // 蒙版跟随鼠标移动的left和top
    var maskLocation = {
      left:
        e.clientX -
        getStyle(oMask, "width") / 2 -
        oSmallAreaImg.getBoundingClientRect().left,
      top:
        e.clientY -
        getStyle(oMask, "height") / 2 -
        oSmallAreaImg.getBoundingClientRect().top,
    };

    // 限制边界
    if (maskLocation.left < 0) {
      maskLocation.left = 0;
    } else if (
      maskLocation.left >=
      oSmallAreaImg.clientWidth - oMask.offsetWidth
    ) {
      maskLocation.left = oSmallAreaImg.clientWidth - oMask.offsetWidth;
    }

    if (maskLocation.top < 0) {
      maskLocation.top = 0;
    } else if (
      maskLocation.top >=
      oSmallAreaImg.clientHeight - oMask.offsetHeight
    ) {
      maskLocation.top = oSmallAreaImg.clientHeight - oMask.offsetHeight;
    }

    // 计算比例
    // 蒙版移动的距离/放大区域移动距离 = 蒙版可以移动的距离/放大区域可以移动的距离
    var scale =
      (oBigAreaImg.offsetWidth - oBigArea.clientWidth) /
      (oSmallAreaImg.clientWidth - oMask.offsetWidth);
    var oBigAreaMove = {
      left: maskLocation.left * scale,
      top: maskLocation.top * scale,
    };

    // 改变大图图片移动的距离
    oBigAreaImg.style.left = -oBigAreaMove.left + "px";
    oBigAreaImg.style.top = -oBigAreaMove.top + "px";

    // 改变蒙版的left和top
    oMask.style.left = maskLocation.left + "px";
    oMask.style.top = maskLocation.top + "px";
  };

  // 绑定离开事件
  oSmallArea.onmouseleave = function () {
    // 隐藏蒙版
    oMask.style.display = "none";
    // 隐藏放大镜图
    oBigArea.style.display = "none";
  };
}

// 商品类别
shopClass();
function shopClass() {
  var oConPoint = document.querySelector(".conPoint");
  var fragment = document.createDocumentFragment();
  // 获取data数据
  var data = goodData.path;

  // 遍历循环
  data.forEach(function (item, index) {
    var oDataA = document.createElement("a");
    oDataA.href = item.url;
    oDataA.textContent = item.title;
    fragment.appendChild(oDataA);
  });
  oConPoint.appendChild(fragment);
}

//缩略图动画
thumbnailMove();
function thumbnailMove() {
  // 获取左右两边的点击按钮
  var oLeft = document.querySelector(".prescroll .left");
  var oRight = document.querySelector(".prescroll .right");
  // 获取ul列表
  var oUl = document.querySelector(".listOut .list");
  // 获取所有的li
  var oLi = document.querySelectorAll(".listOut .list li");
  // 保存长度
  var oLiLens = oLi.length;
  // 获取每次移动的距离
  var everyLocation = 2 * oLi[0].clientWidth;
  // 获取初始值
  var startLocation = 0;
  // 获取可以移动的距离
  var moveLocation = ((oLiLens - 5) * everyLocation) / 2;

  // 绑定点击事件
  oRight.onclick = function () {
    // 总共可以移动的距离减去移动后的距离大于每次移动的距离才移两个图片的距离
    if (moveLocation - startLocation >= everyLocation) {
      startLocation += everyLocation;
    } else {
      startLocation = moveLocation;
    }

    oUl.style.transform = "translate(-" + startLocation + "px)";
  };

  oLeft.onclick = function () {
    // 如果已经移动的值大于每次走的值，则继续走两个
    if (startLocation > everyLocation) {
      startLocation -= everyLocation;
    } else {
      startLocation = 0;
    }
    oUl.style.transform = "translate(-" + startLocation + "px)";
  };
}

//缩略图点击
thumbnailClick();
function thumbnailClick() {
  // 获取所有的list中的li
  var oLi = document.querySelectorAll(".list li");
  var oSmallArea = document.querySelector(".smallArea img");
  var oBigArea = document.querySelector(".bigArea img");
  var data = goodData.imgsrc;

  // 给所有的li绑定点击事件
  oLi.forEach(function (item, index) {
    item.onclick = function () {
      oSmallArea.src = data[index].s;
      oBigArea.src = data[index].b;
    };
  });
}

// 图片数据替换
detailData();
function detailData() {
  var oPriceArea = document.querySelector(".priceArea");
  var oData = goodData.goodsDetail;

  // 渲染数据
  oPriceArea.innerHTML =
    '<h3 class="title">' +
    oData.title +
    '</h3>\
  <p class="con1">' +
    oData.recommend +
    '</p>\
  <div class="price">\
      <div class="priceDetail">\
          <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</p>\
          <p>￥ <span>' +
    oData.price +
    '</span> 元</p>\
      </div>\
      <div class="buy">\
          <p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>\
          <p><span>' +
    oData.promoteSales.type +
    "</span>" +
    oData.promoteSales.content +
    '</p>\
      </div>\
  </div>\
  <div class="support">\
      <div class="supportDetail">\
          <p>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</p>\
          <p>' +
    oData.support +
    '</p>\
      </div>\
      <div class="address">\
          <p>配&nbsp;送&nbsp;至</p>\
          <p>' +
    oData.address +
    "</p>\
      </div>\
  </div>";
}

//筛选数据
chooseData();
function chooseData() {
  var oChooseArea = document.querySelector(".chooseArea");
  var dlData = goodData.goodsDetail.crumbData;

  // 首先渲染数据
  dlData.forEach(function (item, index) {
    var newDl = document.createElement("dl");
    var newDt = document.createElement("dt");
    newDt.textContent = item.title;
    newDl.appendChild(newDt);

    item.data.forEach(function (item, index) {
      var newDd = document.createElement("dd");
      newDd.textContent = item.type;
      // 自定义后面计算需要的价格
      newDd.dataset.changePrice = item.changePrice;
      newDl.appendChild(newDd);
    });

    // 依次将dl放入父元素中
    oChooseArea.appendChild(newDl);
  });
}

//筛选点击
chooseClick();
function chooseClick() {
  // 分别获取每一个dl中的dd
  var oDl = document.querySelectorAll(".chooseArea dl");
  // 创建一个数组用来保存当前点击的dd
  var arr = new Array(oDl.length);
  // 获取要让入dd的元素
  var oChooseInsert = document.querySelector(".chooseInsert");

  oDl.forEach(function (item, i) {
    // 从当前的dl中获取所有的dd
    var oDds = item.querySelectorAll("dd");
    // 获取所有的dl
    var oDl = document.querySelectorAll(".chooseArea dl");

    oDds.forEach(function (item, index) {
      item.onclick = function () {
        // 每次点击时清除一下目标元素中的内容
        oChooseInsert.innerHTML = "";
        // 让所有dd的样式消失
        oDds.forEach(function (item, index) {
          item.style.color = "#666";
        });
        // 让当前点击的dd颜色变红
        this.style.color = "red";

        // 将dd存入数组
        arr[i] = this;
        // 遍历数组，将dd加入到oChooseInsert
        arr.forEach(function (item, index) {
          // item有值才进入
          if (item) {
            var oMark = document.createElement("mark");
            // 创建删除标签
            var oDelete = document.createElement("a");
            // 设置一个自定义属性用来保存索引
            oDelete.dataset.index = index;
            oMark.textContent = item.textContent;
            oDelete.textContent = "X";
            oMark.appendChild(oDelete);
            oChooseInsert.appendChild(oMark);
          }
        });

        // 改变价格
        price(arr);

        //在生成mark标签的时候给所有的mark标签绑定删除事件
        //获取所有mark的a标签
        var oDeA = document.querySelectorAll("mark a");
        oDeA.forEach(function (item, index) {
          item.onclick = function () {
            // 获取a的父级元素，也就是mark
            var parent = this.parentNode;
            var xMark = this.dataset.index;
            // 删除mark
            parent.remove();
            // 数组中的值也要跟着删除
            arr[xMark] = null;

            // 删除mark的时候dl里面的dd也要恢复样式
            var oDd = oDl[xMark].querySelectorAll("dd");
            oDd.forEach(function (item, index) {
              item.style.color = "#666";
            });
            oDd[0].style.color = "red";

            // 改变价格
            price(arr);
          };
        });
      };
    });
  });
}

//计算价格函数
function price(arr) {
  // 获取初始价格
  var startPrice = goodData.goodsDetail.price;
  // 获取要改变的标签
  var oPriceDetail = document.querySelector(".priceDetail span");
  // 获取数量
  var oNumInp = document.querySelector(".goodsNum .num input").value;

  // 遍历数组
  arr.forEach(function (item, index) {
    // 价格依次累加
    if (item) {
      startPrice += +item.dataset.changePrice;
    }
  });

  // 渲染价格: 单价乘以数量
  oPriceDetail.textContent = startPrice * oNumInp;
}

//数量的点击
numClick();
function numClick() {
  var oPlus = document.querySelector(".goodsNum .num .plus");
  var oMins = document.querySelector(".goodsNum .num .mins");
  var oInp = document.querySelector(".goodsNum .num input");
  // 获取价格的span
  var oPriceDetail = document.querySelector(".priceDetail span");
  // 初始化一个初始值
  var num = 1;

  // 绑定+点击事件
  oPlus.onclick = function () {
    // 点击的时候获取真实的价格
    var nowPrice = +oPriceDetail.textContent;
    num++;
    oInp.value = num;

    // 计算改变以后的价格
    var totalPrice = (+oPriceDetail.textContent / (num - 1)) * num;
    // 改变DOM的价格
    oPriceDetail.textContent = totalPrice;
  };

  // 绑定-点击事件
  oMins.onclick = function () {
    if (num > 1) {
      num--;
      oInp.value = num;

      // 计算改变以后的价格
      var totalPrice = (+oPriceDetail.textContent / (num + 1)) * num;
      // 改变DOM的价格
      oPriceDetail.textContent = totalPrice;
    } else {
      oInp.value = 1;
    }
  };
}


//选项卡切换
var Tar = function (obj) {
  this.titles = obj.titles;
  this.cons = obj.cons;
  var that = this;
  this.titles.forEach(function (item, index) {
    item.onclick = function () {
      that.click(item, index);
    };
  });
};

Tar.prototype = {
  click: function (item, index) {
    var that = this;
    this.titles.forEach(function (item, index) {
      item.classList.remove("active");
      that.cons[index].classList.remove("active");
    });

    item.classList.add("active");
    this.cons[index].classList.add("active");
  },
};

var tar1 = function () {
  // 获取tar1的tar标签和con标签
  var oTitles = document.querySelectorAll(".tabTitle h4");
  var oCons = document.querySelectorAll(".tabContent .tab-pane");

  new Tar({
    titles: oTitles,
    cons: oCons,
  });
};

var tar2 = function () {
  // 获取tar2的tar标签和con标签
  var oTitles = document.querySelectorAll(".tab-wraped li");
  var oCons = document.querySelectorAll(".tab-content .tab-pane");

  new Tar({
    titles: oTitles,
    cons: oCons,
  });
};

tar1();
tar2();


//侧边栏
aside();
function aside(){
  // 获取menu
  var oMenu = document.querySelector('.toolBar .menu');
  // 获取toolBar
  var oToolBar = document.querySelector('.toolBar');
  // 定义一个开关用来控制
  var flag = true;

  oMenu.onclick = function(){
    if(flag){
      oToolBar.style.right = 0;
    }else{
      oToolBar.style.right = '-294px';
    }

    flag = !flag;
  }
}
