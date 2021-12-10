### JavaScript

#### ECMAscript

- 语法、变量、关键字、保留字、值
- 原始类型、引用类型运算、对象、继承、函数

#### DOM(document object model)

_W3C 规范 获取修改添加删除 html 元素_

#### BOM(browser object model)

_没有规范 滚动条、事件_

#### JS 引擎是单线程还是多线程

_JS 引擎是单线程的 -> 模拟多线程_
进程: 程序的一次执行, 它占有一片独有的内存空间
线程: 进程内的一个独立单元，CPU 的基本调度单位, 是程序执行的一个完整流程

_轮转时间片：短时间之内轮流执行多个任务的片段_

1. 任务 1 任务 2
2. 切分任务 1 任务 2
3. 随机排列这些任务片段,组成队列
4. 按照这个队列顺序将任务片段送进 JS 进程
5. JS 线程执行一个又一个的任务片段

#### 变量

_命名规范_

- 不能以数字开头
- 能字母\_ $开头
- 包含字母\_$数字
- 不能用关键字、保留字当变量
- 语义化 结构化
- js_header j_header J_header js-header
- 小驼峰命名法 myEnglishName

#### JS 的值

动态语言 -> 脚本语言 -> 解释型语言 -> 弱类型语言
静态语言 -> 编译型语言 -> 强类型语言

原始值 -> 基本类型 -> 再次赋值会在栈内存里再开辟一个空间用来放值，原来位置的值会一直在

- Number String Boolean undefined null

引用值 -> 栈内存存堆内存的地址,堆内存对应的地址存值,
栈内存指向堆内存,arr2 = arr1,arr2 指向同一个堆内存的地址,
arr1 = [1,2], arr1 重新开辟一个堆内存，指向新的堆内存地址,
此时,arr2 和 arr1 的值就不同了

- object array function date RegExp

#### 常见的数据类型与比较符号

_NaN 和 infinity 是 Number 类型_

number 和 string 比较 会先把 string 转换成对应 number 的值再比较
string 和 string 比较 字符串相对应的 ASCII 码比较
1 === "1" // false
NaN == NaN // false NaN 与包括自己在内任何东西都不相等

var a = b = 1; // a 是局部的，b 是全局的

#### 一元操作符

一元+ +undefined // NaN 一元加会将一个东西变成数字(用得不多)
一元- -false // false -> 0 -> -0(0 和-0 是完全相等的) 一元减会将一个东西变成数字然后取负值(用得不多)

++ -- !(先转换为布尔类型再取反) 位运算符
~10 // -10-1(按位取反)
typeof(加个括号是为了让你方便阅读) void(返回 undefined)(a 标签禁止跳转经常用) delete

只有一元操作符，三元操作符，赋值操作才从右向左运算

var a = 1;
console.log(!a++); // false
var b = a+++a; // 先计算 b，再 a+++a
console.log(a); // 3

#### 什么时候用 switch

switch(变量){
case 值:
语句;
break;
default:
语句;
}

一般判断有值范围或者条件有多个的用 if
一般有定值，而且定值有很多个 switch
case 后面的值和 switch 里的值匹配是===

#### 逻辑运算(相当重要)

与&& 或|| 非 _','也是运算符 返回所有','后的值_
undefined,null,NaN,"",0,false
除上述以为都是真
var name=""; console.log(name || '未找到数据');

#### typeof 再 typeof 出来的值(背)

typeof(typeof(a)) // string
typeof(typeof(123)) // string

#### 显示类型转换和隐式类型转换(背)

**显示**

- Number('1a') || Number(undefined) || Number('a')都是 NaN
- Number(null) Number('3.14') 都是对应的数字类型
- parseInt('123abc') //123
- parseInt(b, 16) //11 parseInt(string, radix)
- parseInt('') // NaN
- var num = parsetFloat('3.1415926') //3.1415926
- console.log(num.toFixed(2)); // 3.14 四舍五入
- undifind 和 null 没有 toString 方法
- Boolean //undefined null NaN "" 0 false 除了上述都是 true
- undefined null({}) 0 '' false NaN

}

**隐式**

- / - % str -> number

* a='123'; a++; // a=124 Number(a)
* '3' \* 2; //6
* === 不进行隐式转换
* 2 > 1 == 1 //true
* undefined || null ><= 0 //全是 false
* undefined == null //true
* +- '123' //+-123(number)

**isNaN(判断是不是非数)**

- 先 Number(值) -> NaN -> bool
- isNaN(123 || '123' || null); //false
- isNaN('a' || undefined); //true

#### 函数的定义方式、形参和实参的特点(背)

定义：一个固定的功能或者是程序段被封装的过程，实现一个固定的工程或者是程序，
在这个封装体中需要一个入口和一个出口，
入口就是参数，出口就是返回值

方式：函数声明
匿名函数表达式(函数字面量)
函数的组成部分：函数名 function 参数(可选) 返回值()return

形参和实参数量可不等 函数内部可以更改实参(arguments)的值(必须给形参传值才能更改对应实参)
实参和形参有对应的映射关系，实参存在栈内存中，形参数组存在堆内存中，正因为
有映射关系，实参改变，对应的形参数组里的形参的值也会改变, 实参和形参谁不是 undefined 就找谁(es6 的特性)

**函数的最后一句话就是 return 如果不加 js 引擎会默认加上 return 后面的语句不会执行**
return name || '您没有填写姓名！'

#### 预编译(最重要) 和作用域及作用域链

AO(函数上下文) -> 寻找形参和变量声明 -> 实参值赋给形参值 -> 找函数声明，将函数声明赋给对应的 -> 执行函数(函数里的变量的值的赋值会覆盖函数声明)
GO(全局上下文) === window

**作用域**
[[scopr]]
1、[[scopr]]是函数创建时，生成的一个 JS 内部的隐式属性
2、[[scopr]]是函数存储作用域链的容器 -> 作用域链
-> _AO/GO_
_AO_:函数的执行期上下文(Activation Object)
_GO_:全局的执行期上下文(Global Object)
-> 函数执行完成以后，AO 是要销毁的。AO 是一个即时的存储容器

#### 闭包

当内部函数被返回到外部并保存时，一定会产生闭包
闭包会产生原来的作用域链不释放
过渡的闭包可能会导致内存泄漏，或加载过慢
for 循环出来的 i 是最大长度: 用立即执行函数解决，这样每次才能把 i 存起来

#### 立即执行函数(英文名词背 下来)

_执行完后会自动销毁_
_IIFE - Immediately-Invoked Function Expression_ yi/mi/die/te/li
(function(a, b){})(2, 3);
(function(a, b){}(2, 3));

一定是表达式才能被执行符号执行

function test(){
console.log(1);
}(); // 这不是表达式 所以不能执行

函数声明变成表达式的方法 + - ! || && ;
只要是在括号写的，都算表达式

function test(a){
}(6); // 不报错，因为括号里传值了，js 引擎就认为这是一个表达式

#### 对象及自定义构造函数(大量使用)

删除: delete teacher.address;
delete teacher.teach(); // 删除方法千万不能加()，会执行并没有删除

对象字面量: obj.name = '李四';

自定义构造函数： function Teacher(){} // 大驼峰命名法

没有实例化对象时，this 指向 window
实例化对象后，this 指向实例化对象
new 的作用是在 OA 中生成了一个 this 空对象，将参数都装进去了，最后隐式的 return this 出来
当在构造函数中加 return，而且是引用值的话，那么实例化后就是 return 的值

#### 包装类

- 原始值并没有自己的方法和属性
- 总共有三种 new Number、new String、new Boolean
- undefined 和 null 不能设置任何属性和方法
- var a = 123; // 原始值
- a.len = 3; // new Number(123).len = 3; 没有变量，保存不了所以就 delete a.len 这个属性
- console.log(a.len); //undefined

- var str = 'abc'; // str.length 相当于 new String(str).length

#### 数组截断方法(对字符串没用)

var arr = [1, 2, 3, 4];
arr.length = 3; //[1, 2, 3]
arr.length = 5; //[1, 2, 3, 4, empty]

#### 原型

prototype 是定义构造函数构造出的每个对象的公共祖先
所有被该构造函数构造出的对象都可以继承原型上的属性和方法
_new Obj() -> Obj 构造函数的原型_

_constructor(默认保存的是构造函数对象) -> 构造函数本身 -> 可以在 prototype 对象中硬改指向其它构造函数_
实例化以后实例化对象的 prototype 指向对象的 prototype，但是如果再重新生成一个对象的 prototype，那么在堆内存中重新开辟一个空间，地址也随之改变，实例化对象的 prototype 指向不了，所以就改变不了
实例化对象后 ->生成 this 对象，在 this 对象里面 -> 生成 **proto**(proto 属于每一个实例化的对象,是装 prototype 的容器) -> 存储 Car.prototype
_constructor 和**proto**都是可以更改的_

#### 原型链

沿着**proto**寻找属性形成了一个链条式的继承关系

原型链的顶端: _Object.prototype_,其**proto**==null;
Object 构造函数(对象)的隐式原型: Function.prototype
所有构造函数对象的隐式原型：Function.prototype
Object.prototype 底下保存了一个 toString 的方法
原型的原型是由系统 Object(new Object)构造出来的

#### Object.create

Object.create(对象/null) // 创建对象
把另外的对象作为原型(继承)使用就用 create
不是所有的对象都继承于 Object.prototype: _Object.create(null)_
undefined 和 null 不能被包装类转换，而且没有原型

第二个参数是一个对象，对象中是每一个的属性及属性描述符(例如 Object.prototype 上的属性就不能枚举或删除，还有框架)

- value:指定属性值
- writable:默认为 false,设置属性值是否可写
- enumerable:默认为 false,设置属性是否可枚举( for/in)
- configurable:默认为 false,设置是否可修改属性特性和删除属性

#### Object.defineProperty

给对象扩展一个可描述的属性

- 参数一：被设置的对象
- 参数二：扩展的属性名
- 参数三：扩展的属性的属性描述

#### Object.definePorperties

给对象扩展多个可描述的属性

- 参数一：被设置的对象
- 参数二：扩展的属性及属性描述，对象个格式

#### 存取器属性

getter 和 setter

- 可以通过存取器属性获取或者设置对象内的某些属性的值
- 当给这个属性设置值的时候，则会接收到这个值进行处理，当获取这个属性的值的时候，会进行计算返回值

#### window 和 return

函数默认：return undefined
构造函数实例化后返回：this

#### js 插件的写法

;(function(){
function Test(){}
Test.prototype = {
}
// 防止函数污染(外界无法访问立即执行函数里面)
window.Test = Test;
})();

var test = new Test();

#### call 和 apply

- 严格模式下要注意使用，undefined
- 执行函数时隐式的加了 call 方法
- 都是更改 this 的指向
- call:传进去的是参数
- apply:传进去的是数组
- bind: 定时器里面(function()).bind(this)改变 this 指向

#### 原型链继承企业级方法

结合立即执行函数和闭包

#### 链式调用

sched.wakeup().morning();
每一个方法用 return this;

_最早的 JS 引擎访问对象：obj['name']_

#### 对象枚举

枚举 -> 遍历
var car = {brand: 'Benz', color: 'red'}
for (var key in car){ // _如果是自定义构造函数，原型上的属性也会打印出来_
console.log(car.key); // car.key -> car['key'] -> undefined
} // 所以应该写 car[key] -> Benz

#### 判断一个从后端传过来的数据是不是数组(用得很多)

尽量不要用 instanceof
var str = Object.prototype..call(a);toString

#### this

- 全局 this -> window
- 预编译函数 this -> window
- apply/call 改变 this 指向
- 构造函数的 this 指向实例化对象
- 在 es5 中，永远是 this 永远指向最后调用它的那个对象
- 箭头函数的 this 始终指向函数定义时的 this，而非执行时

#### callee(常用在立即执行函数中)/caller

_arguments.callee_(打印出来的是这个函数).length: 形参的长度
caller:返回当前被*调用*函数的函数引用

#### 三目运算符

自带 return 功能

#### 深拷贝和浅拷贝

拷贝/复制/克隆
浅拷贝: 只是做了值的处理：比如把原始对象的值都复制过来了，还把原型上的值也去掉了,但是对引用值没有处理，对目标对象内部的引用值增删改查,原始对象也会跟着改变。
深拷贝: 不光做了值的处理,对原始对象中引用值也做了相应的处理，重新在内存中开辟了空间用来装引用值,
对目标对象内部的引用值增删改查,原始对象不会跟着改变。

_hasOwnProperty:找对象自身的属性，排除自定义的构造函数原型上的属性，不在原型上返回 true_
_instanceof(无比重要: 企业级开发一般不会用这个判断是什么对象):判断这个对象是否是该构造函数实例化出来的(只要在原型链上有重合的都是 true)_

#### 数组

var arr3 = Array() //这样声明也可以，但不使用
所有数组都继承于 Array.prototype
_数组是对象的另一种形式_

稀松数组(前提：已经是数组) -> 数组并不是每一位都有值，但最后一位打没打逗号都没值
用内置的构造函数构造数组不能有空值(还不是数组)
构造函数如果只填一个值:整数：只是设置了数组的长度，值都是 empty 的，不是空数组。字符串：将字符串放进数组
arr[arr.length]是 undefined 在 object 中找属性是 arr.length 的属性，没有所以是 undefined
_数组的方法都是继承于数组构造函数的 Array.ptototype 上的_

**修改原数组：**

- push unshift -> 返回值是执行了方法以后数组的长度 (后端数据整合用得很多)
- pop shift -> 没有参数，返回值是删除的字符串：可以测试后端传过来的是什么数据\*
- splice(给对象添加会让会变成[])(开始项的下标(负值就往后数，-1 是最后一位), 剪切长度(可以为 0:那就是只添加值), 再最后的位置添加需要的新值)\*
- reverse:倒序
- sort(很重要):返回值是排序以后的数组(按照 ASCII 码排序).\*\*
- 要想正常的排序得再()里面写 function(a,b)，1、必须要有两个形参。2、返回值：负值(a 就排在前面)，正值(b 就排在前面)，0(保持不动)\*\*

**新建数组**

- concat:连接多个数组(后端数据整合用得很多)
- toString(): 将数组转换成字符串
- slice(改变 call 指向会变成数组)(挺有用的): slice(开始项的下标(包括当前下标), 结束时得下标(不包括当前下标：下标之前), )：从哪开始到哪结束
- join/split(挺有用的): join():不填用逗号隔开,括号里面加什么用什么隔开 arr.split(将一个字符串按照填写的分隔符变成数组, num):第二个参数表示保留几位数组元素

**ES5 数组扩展方法**

- forEach: 1.this 指向 window 2.第二个参数让 this 指向它
- filter: 1.返回一个新数组(每一次执行都要看最后 return 的返回值，true 本次 funtion 就返回出去，return 开发中要用表达式)
- map: 1.返回一个新数组 2.return item(或者随意写一个值更改 item，会修改原数组的值)
- reduce(function(prev, cur, index, arr), initialValue): 第二个参数(初始值,就是 prev,不对 prev 进行加工的话就只打印一次)：造对象的最好的方法
- reduceRight(): 从右往左遍历，reduce 实际上是相当于 reduceLeft(由左往右遍历)

**类数组**
_类数组 -> 用对象表示的，模拟数组的组成_

- 一定要有下标对应的值，还要有 length 属性
- 用对象表示的数组，看起来是数组并不是真正意义上的数组。
- 比如：函数里的实参并没有继承 Array.prototype
- 让类数组彻底转换成数组: var argArr = Array.prototype.slice.call(arguments);
- 让类数组能用数组的方法: Object.prototype.push = Array.prototype.push;
- 让'{}'变成'[]'(变外面的符号，还不是真正的数组): Object.prototype.splice = Array.prototype.splice;
- temp[temp['length']] = childItem; temp.length++;
- Array.from(): 将类数组转成数组

#### 错误

_语法错误 SyntaxError_

1. 变量名不规范 var 1 = 1; var 1ab = 1; function 1test(){}
2. 关键字赋值 new = 5; function = 1;
3. 基本的语法错误 var a = 5:

_引用错误 ReferenceError_

1. 变量或者函数未被声明 clog(a); test();
2. 给无法被赋值的对象赋值的时候 var a = 1 = 2; clog(a) = 1;

_范围错误 RangeError_

1. 数组长度赋值为负数
2. 对象方法参数超出可行范围 clog(num.toFixed(-1));

_类型错误 TypeError_

1. 调用不存在的方法 123(); // 判断 123 的类型是不是一个 function var obj = {} obj.say(); // 因为 obj 里面没有方法,所以认为 say 是个属性,但是把属性执行了,所以是类型错误
2. 实例化原始值 var a = new 'string'; // new 后面必须是一个构造器(函数)

_URI 错误 URIError_

1. var str = decodeURI('%fcvaglnvf%'); // 报错找 encodeURI 和 decodeURI

URI: UNIFORM RESOURCE IDENTIFIER 统一资源标识符
URL: UNIFORM RESOURCE LOCATOR 统一资源定位符
URN: UNIFORM RESOURCE NAME 统一资源名称
URL 和 URN 是 URI 的子集

_eval 函数执行错误 EvalError_

eval:最大的作用是将 JSON 字符串转换成可循环的 JSON 对象然后遍历出来(不要用)

1. 语法规范不好:加不加''都会执行
2. 不好调试
3. 性能问题

setTimeout('alert(1)', 1000); 内部会 1s 后会调用 eval('alert(1)')

_new Error,new SyntaxError_
7 种构造错误函数

_try catch finally throw_
手动抛出错误的方法

#### 严格模式

- 'use strict' 为什么这样写: 字符串是表达式,不会报错
- 'use strict'建议写在函数里
- IE9 及以下 IE 不支持严格模式
- 必须声明变量 var a = b = 1; //报错
- 函数里的 this 不赋值就是 undefined,必须通过 call 改变指向赋值
- 函数里的形参不能是一样的
- 对象的属性名重复虽然不报错,但是不允许有重复的属性名,最后后面的属性
- with(): 括号里填写什么 函数里的 this,就改变成他的作用域(影响性能) 严格模式下不能用
- eval 在严格模式下是有独立的作用域,在外界打印 eval 里面的变量会报错

#### 垃圾回收

1. 找出不再使用的变量
2. 释放其占用内存
3. 固定的时间间隔

#### RegExp

regular expression
uber

正则匹配的原则: 匹配过的东西不回头匹配、贪婪模式

正则表达式里面如果是变量，那么只能用对·象字面量的方式创建(new RegExp)
第二个参数(修饰符，正则属性)：_i(ingnore case)_: 忽略大小写 _g(global)_: 全局匹配能匹配所有的 _m(multi-line)_: 多行匹配
元字符: 正则使用的转义字符
\w: [0-9A-z_]
\W: [^\w]
\d: [0-9]
\D: [^\d]
\s: [\r\n\t\v\f]
\S: [^\s]
\b: 单词边界
\B: 非单词边界
.: 可以匹配除了换行和\r 的所有字符

#### 正则量词

n+: {1, 正无穷}: 匹配 1 次以上 = _{1,}_
n*: {0, 正无穷} 0 代表可以匹配""，最后一位后面的空值也算 = {0,}
n?: {0, 1}: 0 或者 1 次 = *{0,1}_
^n: 匹配任何以 n 开头的字符串(多行文本匹配也生效)
n$: 匹配以任何以 n 结尾的字符串(多行文本匹配也生效)
?=n: 匹配任何其后紧跟着指定字符串 n 的字符串 要用括号括起来_(?=n)*
?!=n: 相反 这两个问号表达的式子叫做(*正向预查*)
(?:): 不捕获分组
*捕获分组*: 用子表达式的会额外匹配到子表达式
*子表达式: 一定要用()括起来\*
反向引用: \1

_匹配以 abcd 开头又以 abcd 结尾_: /^abcd.*abcd$/
*匹配 xxyy,xxxx:\* /(\w)\1\1\1/g /(\w)\1(\w)\2/g //(\w): 子表达式(是有记忆功能的) \1：表示反向引用第几个子表达式

字符串从左到右，依次先匹配多，再匹配少，如果一旦匹配上就不回头匹配
贪婪匹配原则：能匹配多个，绝不匹配少个
正则中写空格就真是空格，不要轻易写空格

#### 贪婪模式和非贪婪模式

正则默认贪婪模式
在匹配的地方加个?就是非贪婪模式(.*?)(前面一个量词 + ?): 能匹配少就不匹配多(有""就取空)

#### ?

?可以匹配 0 个或一个字符、可以正向预查、可以改变贪婪模式、也可以当一个特殊字符。

#### replace(很重要的方法)

字符串对象上的方法
replace(后面的替换前面的): 不具备全局匹配的能力
只有正则加了 g 才能全局匹配
第二个参数可以用$符号拿出子表达式中的引用的字符串(字符串时必须用$),字符串里面要用$时可以写$$
第二个参数可以用function($, $1, $2)
$符号代表这个字符串里面被匹配出来的字符串,$1 表示其中的子表达式,子表达式的数量不定

#### exec(excute)

机械式的循环，reg.lastIndex 和 index 是一样的，可以通过改变 lastIndex 可以修改 excu 下标位置。如果修改的 index 不一致，那么 exec 会寻找下一个符合的情况，再下一次会把 lastIndex 修改回来。
开发中用得不多，但是框架、库中用得很多
exec 的类数组是继承 Array 的
执行的 reg 中如果有子表达式，exec 会把每次引用的子表达式呈现出来

#### exec 和 match 对比

_match:_

1. 字符串的对象
2. 参数 -> 正则
3. 非 g，返回第一个被匹配的片段，并返回子表达式中的字符串
4. g，返回所有可被匹配的片段，但不返回子表达式中的字符串

_exec:_

1. 正则对象上的方法
2. 参数 -> 字符串
3. 非 g，只匹配第一个可匹配的片段，且只匹配一次
4. g，执行一次匹配一次，自动增加匹配位置开头的下标，直到返回 null 以后，再回到最开始重新匹配

#### String 对象上的方法

toUpperCase: 全变成大写
toLowerCase: 全变成小写
toLocaleUpperCase: 全变成大写。针对一些比较特殊的语言，比如土耳其语等语言中有特殊的大小写字母，这些语言的大小写转换要使用 locale。
toLocaleLowerCase: 全变成小写。针对英文字母，加 locale 与否都能实现大小写转换功能

indexOf('匹配的字符串', n): n 表示从第几位后开始匹配,返回值是从开始的 0 开始数的
lastIndexOf('匹配的字符串', n): n 表示从第几位往前开始匹配，返回值也是从开始的 0 开始数的

substr(开始位置(包含), length): 可以为负数
substring(开始位置(包含), 结束位置(不包含)): 1. 如果开始位置>结束位置，js 引擎会先交换位置，再匹配 2. 开始位置=结束位置，返回空串
trim: 清除两侧空格

#### valueof 和 toString 的区别

_toString_

1. 一定返回字符串
2. Date: 返回表示时间的特有的字符串
3. 数组: 返回数组元素用,分隔的字符串
4. 对象: 返回: [object Object]
5. 接收一个参数(radix 基数)用来转换进制
6. 在 function 问题上通过[native code] 区分 JS 内置函数和自定义函数

_valueOf_

1. 一定返回原来的值
2. Date: 返回 13 位毫秒的时间戳
3. 数组: 返回数组原本的值
4. 对象: 返回对象原本的值
5. 没有参数

#### 函数式编程(非常重要)

优点：易读 易维护
概念：函数是第一类对象，不依赖任何其他对象独立存在

纯函数(可提纯就提纯，不能强求，以程序的直接，简洁，易维护为目标)：相同的输入得到相同的输出，不依赖且不影响外部环境也不产生任何副作用，输出完全取决于输入
副作用：只要跟函数外部环境发生了交互就是副作用，比如，函数内部 1. 发送数据请求 改变数据 console.log DOM 操作 数据存储

可移植性、可测试性、引用透明(易读)、并行执行、可缓存性

#### 函数组合(compose)

函数组合 -> 饲养函数 -> compose -> 每个参数都是函数，让函数自右至左依次执行 -> 在一个函数的参数里执行了另外一个函数就叫左倾
若干个纯函数、偏函数、柯里化函数组合一个新的函数，形成数据传递，并实现一种有序执行的效果

#### 结合律(Associativity)

在组合函数的参数中再进行函数的分组组合，和原来的函数组合是一模一样的

#### pointfree

Pointfree style means never having to say your data
无值风格

#### 高阶函数

参数包含一个函数或者返回值为一个函数

JS++从 25 章开始
