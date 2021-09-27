/*
 * obj:
 * imgArr: 图片数组
 * aniTime: 动画执行时间
 * intervalTime: 图片停留时间
 * autoplay：是否自动播放
 */
function Swiper(obj) {
  this.imgArr = obj.imgArr || [];
  this.retImgArr = [
    this.imgArr[this.imgArr.length - 1],
    ...this.imgArr,
    this.imgArr[0],
  ];
  this.aniTIme = obj.aniTIme || 1500;
  this.intervalTime = obj.intervalTime + this.aniTIme || 2500;
  this.nowIndex = 0;

  this.swiperListDom = document.getElementsByClassName("swiper-list")[0];

  this.swiperSpotDom;
  this.leftBtn;
  this.rightBtn;
  this.mainDom;

  this.moveWidth = this.swiperListDom.offsetWidth;
  this.timer = null;

  this.prev = Date.now();

  this.autoplay = obj.autoplay;
}

Swiper.prototype = {
  init: function () {
    this.initDom();

    // 轮播单张图片li
    let li = "";
    for (let i = 0; i < this.retImgArr.length; i++) {
      li += `<li style="left: ${i * this.moveWidth}px;width: ${
        this.moveWidth
      }px" class="swiper-item"><a href="${this.retImgArr[i].url}"><img src="${
        this.retImgArr[i].imgPath
      }" alt=""></a></li>`;
    }
    this.mainDom.innerHTML = li;

    // 小圆点li
    let spotLi = "";
    for (let i = 0; i < this.imgArr.length; i++) {
      if (i === 0) {
        spotLi += `<li class="spot-item" style="background-color: #ff5c1f;" index=${i}></li>`;
      } else {
        spotLi += `<li class="spot-item" index=${i}></li>`;
      }
    }
    this.swiperSpotDom.innerHTML = spotLi;

    // if (this.autoplay) {
    // 	this.timer = setInterval(this.nextSlider.bind(this, this.aniTIme), this.intervalTime);
    // }

    // 上一张，下一张，小圆点绑定点击事件
    // this.eventBind();
  },
  initDom() {
    // 轮播图片dom容器
    this.mainDom = document.createElement("ul");
    this.mainDom.className = "swiper-main";
    this.mainDom.style.width = `${this.moveWidth * (imgArr.length + 2)}px`;
    this.mainDom.style.left = `${-this.moveWidth}px`;
    this.swiperListDom.appendChild(this.mainDom);

    // 小圆点ul容器
    this.swiperSpotDom = document.createElement("ul");
    this.swiperSpotDom.className = "swiper-spot";
    this.swiperListDom.appendChild(this.swiperSpotDom);

    // 上一张按钮
    this.leftBtn = document.createElement("img");
    this.leftBtn.className = "leftBtn";
    this.leftBtn.src = "./img/left.png";
    this.swiperListDom.appendChild(this.leftBtn);

    // 下一张按钮
    this.rightBtn = document.createElement("img");
    this.rightBtn.className = "rightBtn";
    this.rightBtn.src = "./img/right.png";
    if (this.imgArr.length === 1) {
      this.leftBtn.style.display = "none";
      this.rightBtn.style.display = "none";
    }
    this.swiperListDom.appendChild(this.rightBtn);
  },
  prevSlider() {},
  nextSlider() {},
  setActiveSpot: function () {},
  eventBind() {},
};
