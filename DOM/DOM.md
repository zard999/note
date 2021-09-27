#### DOM

Document Object Model 文档对象模型
DOM 对象 -> 宿主对象
*JavsScript的3种对象*
*本地对象和内置对象都是ECMASript的内部对象*
1. 本地对象(Native Object跟浏览器没关系): Object Function Array String Number Boolean Error EvalError SyntaxError RangeError ReferenceError URIError Date RegExp
2. 内置对象(Built-in Object):	Global(虚拟的)	Math
3. 宿主对象(Host Object):执行JS脚本的环境提供的对象(浏览器对象),要注意兼容性问题。浏览器对象window(BOM) 和 document(DOM) -> DOM有w3c规范 DOM实际上是存在window上的

*DOM: 通过浏览器提供的这一套方法表示或者操作HTML和XML(不能操作css，只能操作XML和HTML):实际上是在标签上加上了内联样式*
*jquery能不能操作css: 不能，也是操作标签的style属性*
XML(可以自定义标签) -> XHTML -> HTML  慢慢演变成HTML
使用属性，变量，标签的时候要避免和JS本来属性重合

#### id规范化

id是不能作为样式使用的，id称为钩子：模块化开发中(以功能开发为主)，一个块一个id，给后端对接用的

#### document对象

oUl -> object ul -> 告诉大家是一个DOM对象
document.getElementById(选择一个，其他的都是选择一组) : *IE8及以下id名不区分大小写，IE8及以下也能找到标签的name属性*
document.getElementsByClassName: *IE8及以下是没有该方法的*
document.getElementByName(用得很少): *IE8及以下只能用于有name属性的标签*
document.getElementsByTagName: 开发中用得挺多的


*document的构造函数 -> HTMLDocument   HTMLDocument的构造函数 -> Document*


*HTML5新引入的WEB API(但是出现的很早)：公司基本很少用*
doucment.querySelector(IE7以上兼容): 一个
document.querySelectorAll(IE7以上兼容): 一组
性能问题: *比get系列慢、不实时(比如All了一组元素，实际上是一个片段，remove移除不了)*

#### 节点树和元素节点树

*节点不是元素，节点包含元素 -> 元素节点 === DOM元素*

*遍历节点树*
parentNode: 父级节点 *最顶层是document*
childNodes(很烦人，要专门*封装这个属性*，用得很多): 元素节点+文本节点+注释节点
firstChild:第一个节点(遍历节点树)
lastChild:最后一个节点(遍历节点树)
nextSibling:下一个节点(遍历节点树)
previousSibling:上一个节点(遍历节点树)

*遍历元素节点树(相当于把其他节点过滤掉了)*
parentElement: 选择父元素  *最顶层是html*  IE9及以下不支持
childeren: 选择子元素 IE7及以下不支持(就childeren用一下，其他的公司都不用)
childElementCount = children.length *没人用但是会考*  IE9及以下不支持
firstElementChild  IE9及以下不支持
lastElementChild   IE9及以下不支持
nextElementSibling IE9及以下不支持
previousElementSibling IE9及以下不支持

*用parentNode和childNodes即可，其他都可以不用*

#### 节点

1. 元素节点 = 1
2. 属性节点 = 2
3. 文本节点 #text = 3  换行也算文本节点
4. 注释节点 #comment = 8
5. document #document= 9
6. DoucumentFragment = 11


#### 节点属性

nodeName(只读): 大写变小写toLowerCase()，小写变大写toUpperCase()
nodeValue(可写): 属性节点、文本节点、注释节点可用
nodeType(只读)(很重要): 节点数
attributes(获取属性集合): getAttributeNode(获取属性)(这两个了解一下就行) *一般用getAttribute和setAttribute*

#### 封装childNodes

childNodes -> children

#### DOM结构树

*DOM结构树的节点是Node,不是对象的顶点*
XMLDocument 和 HTMLDocument是同级的   XMLElement 和 HTMLElement是同级的
HTMLDivElement -> HTMLElement -> Element

判断是什么标签：Object.prototype.toString.call(div) -> [Object HTMLDivElement]

#### DOM操作深入

getElementById: *定义在Document.prototype上的，其他都没有*
getElementsByName: 定义在Document.prototype上的，其他都没有

getElementsByTagName: *Document.prototype和Element.prototype都有*
getElementsByClassName: Document.prototype和Element.prototype都有
querySelector: Document.prototype和Element.prototype都有
querySelectorAl: Document.prototype和Element.prototype都有

*: 只有getElementsByTagName才能用(所有的标签都显示出来)

*HTMLDocument.prototype -> body 和 head -> document.body和document.head -> body,head*
*document.title是直接获取里面文本的*
*Document.prototype -> documentElement -> document.documentElement -> html*
document.all: 页面中所有的元素节点集合

#### 创建节点的方法

document.createElement: 创建元素节点(放在堆内存里)
createTextNode: 创建文本节点
createComment: 创建注释节点

appendChild(节点/DOM元素，字符串会报错): 动态的增加子节点和动态的*剪切*节点(永远在最后)  在*Node.prototype*上

parent.insertBefore(a, b): 在父级parent节点下的子节点b之前插入a节点	在*Node.prototype*上

父节点.removeChild(子节点): 移除子节点(没有销毁，还在内存里)	在*Node.prototype*上
子节点.remove(): 彻底删除(*用得较多*)

parent.replaceChild(新节点, origin): 替换节点

node.cloneNode: 括号为空或者里面是false 只复制标签不复制里面的内容
				括号为true 复制标签复制里面的内容
#### innerHTML和innerText

innerHTMl: 字符串(字符实体)
innerText: 标签过滤掉，打印文本 	火狐的老版本用textContent -> IE的老版本又不支持 ->所以还是用innerHTML

#### 元素节点的方法

setAttribute(属性名, 属性值): 给元素增加属性和属性值
getAttribute(): 获取元素属性值 	(取不到是null)

#### H5自定义属性

data-属性名: 通过dataset可以获取到自定义属性
dataset: IE9及以下不兼容
可以通过getAttribute访问到(属性名要写全)

#### createDocumentFragment(非常重要)

创建文档片段(碎片)，把东西装好在给DOM结构，大大的提升了性能(列表)

#### 日期对象

Date() 和 date.toString()输出的内容是一样的
getFullYear(): 基本不用getYear()  千年虫事件
getMonth(): 返回时当前为第几个月(0 - 11)  所以获取月份需要+1
getDate():  返回当前是一个月的第几天(1-31)
getDay():   返回当前是一周中的第几天(0-6) 0是星期天
getHours():
getMinutes():
getSeconds(): 
getMillisecondes():

*getTime()*: 常用

时间戳(TimeStamp): 1970年1月1日0点0分0秒 -> 过了多少毫秒 -> 毫秒数就是当前这个时间的时间戳
检测性能必须也用时间戳

*重点setInterval()*: 计时器 -> window.setInterval() -> 每隔特定的毫秒数时间执行一次内部函数
*setInterval的时间是不准的*
setInterval的返回值: 声明第一个计时器返回1，第二个返回2，依次类推，*每个计时器都有唯一的标识*

*clearInterval()*: 清除计时器 括号里填setInterval的标识

*setTimeout()*: 延时器 -> window.setTimeout() -> 延迟特定的毫秒时间执行一次内部函数
*clearTimeout()*: 清除延时器

#### 查看滚动条的距离

window.pageXOffset/pageYOffset: 常规方法 IE9/IE8及以下不支持

element.scrollLeft/scrollTop: 元素滚动条滚动的距离

document.body.scrollLeft/scrollTop: *这两个方法在浏览器里一个方法能用另一个方法就不能用*
document.documentElement.scroolLeft/scrollTop: *这两个方法在浏览器里一个方法能用另一个方法就不能用*

window.scrollX/scrollY: 不常见

#### 浏览器的怪异模式和标准模式

标准模式(CSS1Compat)
怪异模式(BackCompat): 不写<!DOCTYPE >这个标签就代表不遵守W3C的规范(向后兼容5个版本)
如何检测模式: document.compatMode

#### 浏览器可视区域的尺寸

window.innerWidth/window.innerHeight: *常规*

element.clientWidth/clientHeight: 返回元素的可见宽度和可见高度(包括内容和内边距，只读)
document.documnetELement.clientWidth/clientHeight: *标准模式下用*(不包含滚动条，但不影响开发)
documnet.body.clientWidth/clientHeight: *怪异模式下用*

#### 整个HTML文档的尺寸

element.scrollWidth/Height: 获取元素整个滚动区域的宽/长度
document.body.scrollHeight/scrollWidth: *整个HTML的长度(常用这个)*
document.documentElement.scrollHeight/scrollWidth: 有可能两个都存在

document.body.scrollWidth = window.innerWidth + window.pageXOffset(可视区域的尺寸 + 滚动条滚动的距离)

#### getBoundingClientRect()

数据不实时，一般不用

#### offsetLeft和offsetTop

offsetLeft/Top: 当前元素相对于其定位父元素的偏移量，没有就找body
offsetParent: *返回有定位的父级元素*，没有就找body

#### 操作滚动条

window.scroll(x, y): 操作滚动条的距离，这两个是一样的，没有兼容性问题
window.scrollTo(x, y): 
window.scrollBy(x, y): 每次滚动设定的距离


### DOM最重要的知识

#### DOM间接操作CSS

复合值一定要拆开写(效率更高): oDiv.style.borderWidth = '5px'; oDiv.style.borderSolid = 'solid'; oDiv.style.borderColor = 'red';
保留字前面加css(目前css只有float是保留字): oDiv.style.cssFloat = 'left';

#### 查看计算样式

rem和em会换成px，#000会换成rgb或者rgba
window.getComputedStyle(elem, null/伪元素)[prop]: prop如果是变量必须加上[]才能访问
window.getComputedStyle(elem, null/伪元素).prop

elem.currentStyle: *IE8以下支持，chrome不支持*

#### 访问元素的宽度和高度(border-box)

Width/Height(获取元素的整个大小: 包括边框): 更改绝对定位时的width和height会把padding也加上，影响非常大
最好用封装计算样式的方法来表示width和height

#### 获取伪元素的属性

window.getComputedStyle(div, 'after').height   *(只读)*

#### 操作伪元素

加类 如: .box.active::after{width:100px},然后把active这个类加到元素上就行了

#### 操作样式最正确的方法

.box.active{样式}, 然后加class
尽量少用.,会耗费性能

#### 事件

事件是元素天生就有的能力，绑定事件 = 绑定事件的处理函数
事件 + 事件的反馈 = 前端交互(交互体验)
事件作用在哪个身上这个就是事件源
*句柄绑定事件*: 有on(div.onclick = function || 在元素标签中onclick="")
js会事件覆盖

#### 事件监听

addEventListener(事件类型，事件处理函数，false): IE9以下不支持，可以绑定多个事件处理函数
attachEvent(事件类型，事件处理函数): IE8及以下(*this指向window*)

#### 事件冒泡和捕获

冒泡(false)：从子元素向父元素传递事件的机制
捕获(true)：正好相反
如果冒泡和捕获都绑定了先捕获再冒泡(当捕 获到最后面的子元素时，捕获实际上就消失了，
所以会按照函数的先后执行顺序执行，最后的子元素会先执行冒泡的那个函数，再执行捕获的那个函数，然后接着冒泡)

#### 取消冒泡(冒泡常常给我们带来麻烦)

focus blur change submit reset select这些事件是没有冒泡现象的
ie浏览器，老版本的除了chrome是没有捕获的，新版的firfox有

e.stopPropagation()
e.cancelBubble = true: IE的方法(就在原型上)

#### 取消默认事件

oncontextmenu: 右键菜单

return false; 只能在句柄上使用(兼容性很好)
e.preventDefault(): w3c的标准(IE9及以下都不支持)

*a标签主要的阻止方式：*
javascript: void(0) -> void(0) == return 0
javascript:;
'#': 锚点

#### 事件流

描述从页面中接收时间的顺序(冒泡 捕获)
事件冒泡流(Event Bubbling): IE提出的
事件捕获流(Event Capturing): Netscape提出的

事件捕获阶段、处于目标阶段(按先后顺序执行)、事件冒泡阶段

#### 事件对象(非常重要)

事件触发后的详细信息会包装成一个对象
var e = e || window.event; iE8及以下event保存在window上

*target(火狐只有) srcElement(IE只用) -> 事件源对象*
var tar = target || srcElement;

#### 事件委托/代理

给父级绑定事件，点击子级通过父级冒泡，这时e.target就是子级了(性能比给子元素循环添加事件要好得多)
怎么拿到子级下标: *var index = Array.prototype.indexof.call(oLi, tar)(企业级方法)*、for和for in循环(但是性能不好)

#### 鼠标行为

*clientX/Y*: 鼠标位置相对于当前页面可视区域的坐标(不包括滚动条的距离) 
layerX/Y: 同pageX/Y相同(IE11以下同clientX/Y相同)
screenX/Y: 鼠标位置相对于屏幕的坐标
X/Y: 同clientX/Y相同，firefox不支持(老版火狐不支持，建议不用)
*pageX/Y*: 鼠标位置相对于当前文档的坐标(包含滚动条的距离)(IE8不支持)
offsetX/Y: 鼠标位置相对于块元素的坐标(包含边框，safari不包括边框)

#### JSON

Javascript Object Notation
JSON -> 数据交互 -> 轻量级的数据交互格式

*所有编程语言都离不开的三大数据类型：*
scalar 标量 -> 字符串和数字
sequence 序列 -> 数组和列表
mapping 映射 -> 键值对

#### 动画效果

尽量用translate，不要用left和top，会重绘重排