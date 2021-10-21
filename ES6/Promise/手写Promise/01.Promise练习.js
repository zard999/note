// 1.1  promise1 1 Promise{<pending>}
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
// });
// console.log("1", promise1);

// 1.2  1 2 4 3
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1.3  1 2 4
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1.4  promise1  1 Promise{<fulfilled>} 2 Promise{<pending>} resolve1
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
//   resolve("resolve1");
// });
// const promise2 = promise1.then((res) => {
//   console.log(res);
// });
// console.log("1", promise1);
// console.log("2", promise2);

// 1.5  start 1 success(fn先执行)
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// fn().then((res) => {
//   console.log(res);
// });
// console.log("start");

// 1.6  start 1 success
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("start");
// fn().then((res) => {
//   console.log(res);
// });

// 2.1  start   end resolve time
// console.log("start");
// setTimeout(() => {
//   console.log("time");
// });
// Promise.resolve().then(() => {
//   console.log("resolve");
// });
// console.log("end");

// 2.2  1 2 4 timerStart timerEnd success
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// 2.3(1)   start timer1 timer2 timer3
// setTimeout(() => {
//   console.log("timer1");
//   setTimeout(() => {
//     console.log("timer3");
//   }, 0);
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// 2.3(2)   start timer1 promise timer2
// setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(() => {
//     console.log("promise");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("timer2");
// }, 0);
// console.log("start");

// 2.3  start promise1 timer1 promise2 timer2
// Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("start");

// 2.4  promise1 Promise{<pending>} promise2 Promise{<pending>} Errpr:error!!! promise1 Promise{<fulfilled>:'success'} promise2 Promise{<rejected>: Error:error!!!}
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// 2.5  promise1里的内容 promise1 Promise{<pending>} promise2 Promise{<pending>} timer1 Error:error!!! timer2 promise1: Promise{<fulfilled>: success} promise2 Promise{<reject>: Error:error!!!}
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//     console.log("timer1");
//   }, 1000);
//   console.log("promise1里的内容");
// });
// const promise2 = promise1.then(() => {
//   throw new Error("error!!!");
// });
// console.log("promise1", promise1);
// console.log("promise2", promise2);
// setTimeout(() => {
//   console.log("timer2");
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// 3.1  then, success1
// const promise = new Promise((resolve, reject) => {
//   resolve("success1");
//   reject("error");
//   resolve("success2");
// });
// promise
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// 3.2  catch error then3 undefined
// const promise = new Promise((resolve, reject) => {
//   reject("error");
//   resolve("success2");
// });
// promise
//   .then((res) => {
//     console.log("then1: ", res);
//   })
//   .then((res) => {
//     console.log("then2: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   })
//   .then((res) => {
//     console.log("then3: ", res);
//   });

// 3.3  1 2
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//     return 2;
//   })
//   .catch((err) => {
//     return 3;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 3.4  1 3
// Promise.reject(1)
//   .then((res) => {
//     console.log(res);
//     return 2;
//   })
//   .catch((err) => {
//     console.log(err);
//     return 3;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 3.5  timer success 1001 success 1001
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("timer");
//     resolve("success");
//   }, 1000);
// });
// const start = Date.now();
// promise.then((res) => {
//   console.log(res, Date.now() - start);
// });
// promise.then((res) => {
//   console.log(res, Date.now() - start);
// });

// 3.6  Error:error!!!(没有这个) then: Error: error!!!
// Promise.resolve()
//   .then(() => {
//     return new Error("error!!!");
//   })
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });

// 3.7  .then()返回的不能是promise对象本身，会报错
// const promise = Promise.resolve().then(() => {
//   return promise;
// });
// promise.catch(console.err);

// 3.8  then或者catch传入非函数会发生值穿透（1）
// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 3.9(1)  error: err!!!
// Promise.reject("err!!!")
//   .then(
//     (res) => {
//       console.log("success", res);
//     },
//     (err) => {
//       console.log("error", err);
//     }
//   )
//   .catch((err) => {
//     console.log("catch", err);
//   });

// 3.9(2)   catch error!!!
// Promise.reject("error!!!")
//   .then((res) => {
//     console.log("success", res);
//   })
//   .catch((err) => {
//     console.log("catch", err);
//   });

// 3.9(3)   fail2 Error:error!!!
// Promise.resolve()
//   .then(
//     function success(res) {
//       throw new Error("error!!!");
//     },
//     function fail1(err) {
//       console.log("fail1", err);
//     }
//   )
//   .catch(function fail2(err) {
//     console.log("fail2", err);
//   });

// 3.10(1) 1 finally2 finally finally2后面的then函数 我是finally2返回的值(2错了，除非报错才返回异常的值)
// Promise.resolve("1")
//   .then((res) => {
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
// Promise.resolve("2")
//   .finally(() => {
//     console.log("finally2");
//     return "我是finally2返回的值";
//   })
//   .then((res) => {
//     console.log("finally2后面的then函数", res);
//   });

// 3.10(2)  finally1 捕获错误 Error: 我是finally中抛出的异常
// Promise.resolve("1")
//   .finally(() => {
//     console.log("finally1");
//     throw new Error("我是finally中抛出的异常");
//   })
//   .then((res) => {
//     console.log("finally后面的then函数", res);
//   })
//   .catch((err) => {
//     console.log("捕获错误", err);
//   });

// 3.10(3)  promise1  1 error1  finally1 finally2
// function promise1() {
//   let p = new Promise((resolve) => {
//     console.log("promise1");
//     resolve("1");
//   });
//   return p;
// }
// function promise2() {
//   return new Promise((resolve, reject) => {
//     reject("error");
//   });
// }
// promise1()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally1"));

// promise2()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally2"));

// 3.10(4)  promise1 1 error finally1 finally2
// function promise1() {
//   let p = new Promise((resolve) => {
//     console.log("promise1");
//     resolve("1");
//   });
//   return p;
// }
// function promise2() {
//   return new Promise((resolve, reject) => {
//     reject("error");
//   });
// }
// promise1()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .then(() => console.log("finally1"));

// promise2()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .then(() => console.log("finally2"));

// 4.1
// function runAsync(x) {
//   const p = new Promise((resolve) => {
//     return setTimeout(() => {
//       return resolve(x, console.log(x));
//     }, 1000);
//   });
//   return p;
// }
// Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then((res) =>
//   console.log(res)
// );

// 4.2 cach会捕获最新的异常  1 3 2 Error: 2 4
// function runAsync(x) {
//   const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//   return p;
// }
// function runReject(x) {
//   const p = new Promise((res, rej) =>
//     setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//   );
//   return p;
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 4.3  1 result: 1 2 3
// function runAsync(x) {
//   const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//   return p;
// }
// Promise.race([runAsync(1), runAsync(2), runAsync(3)])
//   .then((res) => console.log("result: ", res))
//   .catch((err) => console.log(err));

// 4.4  0 Error:0 1 2 3
// function runAsync(x) {
//   const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//   return p;
// }
// function runReject(x) {
//   const p = new Promise((res, rej) =>
//     setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//   );
//   return p;
// }
// Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
//   .then((res) => console.log("result: ", res))
//   .catch((err) => console.log(err));

// 5.1(1)  async1 start async2 start async1 end
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   //   阻塞下面的代码，先执行外面的代码
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// async1();
// console.log("start");

// 5.1(2)   async1 start async2 start async1 end
// async function async1() {
//   console.log("async1 start");
//   // 原来代码
//   // await async2();
//   // console.log("async1 end");

//   // 转换后代码
//   new Promise((resolve) => {
//     console.log("async2");
//     resolve();
//   }).then((res) => console.log("async1 end"));
// }
// async function async2() {
//   console.log("async2");
// }
// async1();
// console.log("start");

// 5.1(3)   async1 start promise async1 end start
// async function async1() {
//   console.log("async1 start");
//   new Promise((resolve) => {
//     console.log("promise");
//   });
//   console.log("async1 end");
// }
// async1();
// console.log("start");

// 5.2  async1 start  async2 start saync1 end timer
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   setTimeout(() => {
//     console.log("timer");
//   }, 0);
//   console.log("async2");
// }
// async1();
// console.log("start");

// 5.3  async1 start saync2 start async1 end timer2 timer3 timer1
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
//   setTimeout(() => {
//     console.log("timer1");
//   }, 0);
// }
// async function async2() {
//   setTimeout(() => {
//     console.log("timer2");
//   }, 0);
//   console.log("async2");
// }
// async1();
// setTimeout(() => {
//   console.log("timer3");
// }, 0);
// console.log("start");

// 5.4  123
// async function fn() {
//   // return await 1234
//   // 等同于
//   return 123;
// }
// fn().then((res) => console.log(res));

// 5.5  script start async1 start promise1 script end(async1后面的await的Promise是没有返回值的，也就是它一直是pending状态，因此一直是await在等待，始终没有响应)
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("promise1");
//   });
//   console.log("async1 success");
//   return "async1 end";
// }
// console.log("srcipt start");
// async1().then((res) => console.log(res));
// console.log("srcipt end");

// 5.6  script start async1 start promise1 script end promise1 resolve async1 success async1 end
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("promise1");
//     resolve("promise1 resolve");
//   }).then((res) => console.log(res));
//   console.log("async1 success");
//   return "async1 end";
// }
// console.log("srcipt start");
// async1().then((res) => console.log(res));
// console.log("srcipt end");

// 5.7  script start async1 start promise1 promise2 async1 success async1 end timer
// async function async1() {
//   console.log("async1 start");
//   await new Promise((resolve) => {
//     console.log("promise1");
//     resolve("promise resolve");
//   });
//   console.log("async1 success");
//   return "async1 end";
// }
// console.log("srcipt start");
// async1().then((res) => {
//   console.log(res);
// });
// new Promise((resolve) => {
//   console.log("promise2");
//   setTimeout(() => {
//     console.log("timer");
//   });
// });

// 5.8  script start async1 start async2 promise1 script end async1 end promise2 setTimeout
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");

// 5.9  test start... 执行testSometing promise start... test end... testSometing 执行testAsync promise hello async testSometing hello async
// async function testSometing() {
//   console.log("执行testSometing");
//   return "testSometing";
// }

// async function testAsync() {
//   console.log("执行testAsync");
//   return Promise.resolve("hello async");
// }

// async function test() {
//   console.log("test start...");
//   const v1 = await testSometing();
//   console.log(v1);
//   const v2 = await testAsync();
//   console.log(v2);
//   console.log(v1, v2);
// }
// test();
// var promise = new Promise((resolve) => {
//   console.log("promise start...");
//   resolve("promise");
// });
// promise.then((val) => console.log(val));

// console.log("test end...");

// 6.1  async2 Erroe:error async1 async1 success
// async function async1() {
//   await async2();
//   console.log("async1");
//   return "async1 success";
// }
// async function async2() {
//   return new Promise((resolve, reject) => {
//     console.log("async2");
//     reject("error");
//   });
// }
// async1().then((res) => console.log(res));

// 6.2 script start Error:error!!! async1 async1 success
// async function async1() {
//   try {
//     await Promise.reject("error!!!");
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("async1");
//   return Promise.resolve("async1 success");
// }
// async1().then((res) => console.log(res));
// console.log("script start");

// 7.1  3 7 4 1 2 5 Promise{<fulfilled>:1}
// const first = () =>
//   new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//         console.log(5);
//         resolve(6);
//         console.log(p);
//       }, 0);
//       resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//       console.log(arg);
//     });
//   });
// first().then((arg) => {
//   console.log(arg);
// });
// console.log(4);

// 7.2  script start async1 promise1 script end 1 timer1 timer2(注意延时器的时间)
// const async1 = async () => {
//   console.log("async1");
//   setTimeout(() => {
//     console.log("timer1");
//   }, 2000);
//   await new Promise((resolve) => {
//     console.log("promise1");
//   });
//   console.log("async1 end");
//   return "async1 success";
// };
// console.log("script start");
// async1().then((res) => console.log(res));
// console.log("script end");
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .catch(4)
//   .then((res) => console.log(res));
// setTimeout(() => {
//   console.log("timer2");
// }, 1000);

// 7.3  resolve1 finally undifined timer1 Promise{<fulfilled>: undefined}
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("resolve3");
//     console.log("timer1");
//   }, 0);
//   resolve("resovle1");
//   resolve("resolve2");
// })
//   .then((res) => {
//     console.log(res);
//     setTimeout(() => {
//       console.log(p1);
//     }, 1000);
//   })
//   .finally((res) => {
//     console.log("finally", res);
//   });

// 8.1 使用Promise实现每隔1秒输出1,2,3
const arr = [1, 2, 3];

// reduce
// arr.reduce((p, c) => {
//   return p.then(() => {
//     return new Promise((r) => {
//       setTimeout(() => {
//         r(console.log(c));
//       }, 1000);
//     });
//   });
// }, Promise.resolve());

// map
function test() {
  list.reduce((p, c, i) => {
    return p
      .then(() => {
        return square(c);
      })
      .then((val) => {
        console.log(val);
      });
  }, Promise.resolve());
}
test();
