#### fs

- promisify
- 简单写入：fs.writeFile
- 流式写入：createWriteStream -> open(事件)、close(事件：关闭管道结尾)、end(事件：关闭管道开头，手动关闭这个，不要关 close)
- 流式读取：createReadStream -> end(事件：读取完自动关)、data(事件：读取的时候，chunk 是每次读取的数据)
- 流式读写：在读取中写入 chunk
- pipe 简单流式读写：rs.pipe(ws);

#### http 模块

- Node 作为客户端请求到数据是可读流，需要使用可读流的 data 事件的 chunk 形参接收
