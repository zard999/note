#### 内联样式的使用

一般用 display:none; ,一般都是一个标签里面装着一大串从后端获取的数据。
这个属性,方便测试的时候好隐藏数据，显示数据，


#### div.box的使用

一般都是为了封装一些比如按钮的样式表,需要用的时候直接导入这个样式表
，然后插入对应的类就可以了


#### 文本缩进

一般用在input中，让光标缩进 text-indent


#### em 和移动端适配

1em = 16px

html{
	font-size: 62.5%;
}

所以  1em = 10px


#### 不同浏览器的body默认的margin不同

IE8 -> 上下16px 左右8px
IE7 -> 上下16px 左右11px

#### 绝对定位中的两栏设计(常用)

左侧宽度固定，右侧自适应


#### 浮动元素的识别

内联、内联块、浮动、溢出隐藏、纯文本都可以识别浮动元素的位置，除了块级元素
碰到块级只需将其转换为内联块即可

#### 遮住阴影

只需给上面的元素设置相对定位，然后设置z-index稍微高一点的值让他再上层显示

#### logo的写法

不用img 这样写div.logo>h1>a(hi是为了搜索引擎能更好的爬它)

#### BFC(block formatting contexts)块级格式化上下文

float: left right 
position: absolute fixed
display: inline-block table-cell table-caption flex inline-flex flow-root(单纯触发BFC)
overflow: hidden auto scroll(除了visible)

解决margin合并(给其中一个元素加个父元素并开启BFC)、margin高度塌陷、父元素高度塌陷、浮动元素的覆盖问题
所有float的元素会转换成inline-block

#### 选择器命名方法

选择器复合单词  - 中横线
JS钩子ID 复合单子 _ 下划线
js_ 或者 J_
尽可能选择英文
header	hd	nav	sidebar	footer	figure
尽量不要用 button top left right 直观命名法
结构化命名


#### 当要做鼠标移入显示边框的时候

得事先设置一个透明边框，鼠标移入上去改变颜色即可

#### @规则

@charset 设置样式表的编码 @charset 'uft-8'
@import  导入其他样式文件 @import 'reset.css'
@media   媒体查询(手机适配)
@font-face 自定义字体

#### background-origin和clip

origin: padding-box(默认值) 控制图片左上角的点
clip: border-box(默认值)	    控制图片的裁剪区域

#### 渐变

线性渐变 background-image: linear-gradient(方向、开始颜色、结束颜色);
background-image: linear-gradient(to right,#ff9000,#ff5000);

#### a标签嵌套

a标签嵌套就算外面的a变成块元素浏览器仍然会解析成把两个a解析成兄弟元素

#### 初始包含块

子绝父相父到底是谁：不是body，不是html，不是视口，而是相对于初始包含块
给body/html设置background属性时并没有设置给他们自己，而是设置给了document