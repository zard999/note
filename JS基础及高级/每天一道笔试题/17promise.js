// 用promise实现一个接口超过300mm判定请求超时的功能

const promiseWithTimeOut = function (url, delay = 300) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("time is out"));
    }, delay);
    fetch(url).then((data) => resolve(data.json));
  });
};

promiseWithTimeOut().then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
