#### URI

URI(Uniform Resource Identifier): 统一资源标识符，用来唯一的标识一个资源

URL(Uniform Resource Locator)：统一资源定位符。URL 可以用来标识一个资源，而且还指明了如何定位这个资源,用地址定义一个资源

URN(Uniform Resource Name)：统一资源命名。即通过名字来表示资源的。 用名称定位一个资源

- https 默认端口号 443 http 默认端口号 80
- URL 与 URN 是 URI 的子集
- URI 只是资源标识
- URL 协议名称 + 主机名称 + 端口号 + 路径 + 文件 + 查询所需字符串
- URN 不带协议名称，剩下的内容加起来就是 URN

#### 客户端与服务端

客户端：Client -> 客户所使用的电脑中的应用程序
服务端：Server -> 存放网页、客户端程序、数据处理程序、数据库的电脑

C/S -> Client/Server -> 将应用程序安装在客户端电脑中，由服务端提供客户端所需要的数据(qq 的 PC 端)
B/S -> Browser/Server -> 利用 WEB 浏览器呈现客户端程序界面，由服务端提供客户端程序所需要的数据。

#### DNS 解析

输入 url -> 看运营商的 DNS 本地服务器里有没有 -> 有直接返回没有先去根 DNS 服务器里去 -> 再找.com 域服务器(没查到) -> 去对应域名.com 域去找

#### fs

- promisify
- 简单写入：fs.writeFile
- 流式写入：createWriteStream -> open(事件)、close(事件：关闭管道结尾)、end(事件：关闭管道开头，手动关闭这个，不要关 close)
- 流式读取：createReadStream -> end(事件：读取完自动关)、data(事件：读取的时候，chunk 是每次读取的数据)
- 流式读写：在读取中写入 chunk
- pipe 简单流式读写：rs.pipe(ws);

#### AJAX

JavaSript 脚本发起 HTTP 通信
JavaScript 异步通信：请求服务器返回 XML 文档，前端从 XML 文档中提取数据，再在不刷新页面整个网页的基础上，渲染到网页相应的位置

#### onreadystatechange

xhr.readystate()

#### http 模块

- Node 作为客户端请求到数据是可读流，需要使用可读流的 data 事件的 chunk 形参接收

#### 拦截器

在请求和响应之前拦截，做一些操作之后放行

#### cookie
