<!--
 * @Author: your name
 * @Date: 2021-09-14 10:09:59
 * @LastEditTime: 2021-11-08 09:31:49
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \note\HTML\HTML开发中常见的问题.md
-->

#### 划分结构

从上到下、从左到右、以行为单位

#### 为什么 body 中的 line-height 要用小数

body{
font-size: 14px;
line-height: 1.5;

<!-- 这个行高会给子元素继承 -->

line-height: 150%;

<!-- 子元素的行高都为21px -->

font: 12px/1.5;
}

#### unicode 用法

前后端交互,不能有中文,把中文转换为 unicode

#### SEO(很重要)

布局避免不必要的嵌套，少嵌套
title 标签最重要
h1、h2、h3、h4、h5、h6
文章的标题,网站的 logo 用 h1(以图换字)(h1 只能出现一次)
h2 一般用于副标题,h2 一般用于靠上的布局且是主要成分
h3 一般用于板块的标题
h4 用于板块里的标题

#### 盒模型

1.标准盒模型

2.怪异盒模型

#### 缩略图布局

跟轮播图差不多，外面
一个小盒子，里面大小可以超出，最
后给外部小盒子设置 overflow: hidden
