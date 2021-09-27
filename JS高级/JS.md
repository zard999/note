#### 基本类型和对象类型比较

对象类型存储在堆内存中，地址值存在栈内存的标识符中
对象类型是可变的
对象类型的比较是引用地址值的比较
对象类型的赋值是地址的赋值

#### undefined 和 null 的区别

如果定义的变量准备再将来时用于保存对象，那么最好将该变量初始化为 null 而不是其他值
函数实参赋值时,给不想赋值的形参主动赋值为 null
原型链的顶端是 null
让变量指向的对象为垃圾对象

变量被声明了，但我们并没有赋值，就等于 undefined
函数实参没传值，该参数等于 undefined
调用对象里没有的属性和方法时返回 undefined
函数里没有 return 时，默认返回 undefined

#### 检测数据类型

typeof: 判断基础数据类型 string boolean number undefined function

=== 判断 null 和 undefined

instanceof/constructor: 不能判断基础数据类型 A instanceof B 判断 A 是否是 B 的实例

#### 节流和防抖

不能改变事件发生的频率

#### 原型链

所有构造函数都是对象，都有**proto**
Function 构造函数是被 Function 实例化出来的
对象的隐式原型的值为其对应构造函数的显式原型的值

Object 构造函数是 Function 构造函数的实例

#### window.onload 和 DOMContentLoaded

window.onload: 当页面的节点及所有的资源(图片视频音频等等)全部加载完毕后执行。
DOMContentLoaded: DOM2级事件，当所有的节点全部加载完成即可执行。

#### git

commit(提交)
untrack(提示某个文件未跟踪)
modified(提示修改了某个文件)
deleted(提示删除了某个文件)
红色(不一致)：工作区和暂存区不一致
绿色(一致)：工作区和暂存区一致，暂存区和仓库区一致

修改文件和删除文件可以用-am跳过暂存区
新增文件和重命名文件不能跳过

#### .gitignore

忽略文件 如果已经存在的文件要忽略 先git rm --cached 文件名
