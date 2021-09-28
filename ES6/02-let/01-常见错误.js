// var a = a;
// console.log(a);


// let b = b;
// console.log(b);


// 暂时性死区
// function test(x = y, y = 2) {
//   console.log(x, y);
// }
// test();


// console.log(typeof a);
// let a;


// for(;1;){
//   let a = 1;
// }
// console.log(a); // 不报错，一直循环


// for循环中i依然属于块级作用域
// for(let i = 0; i < 10; i++){

// }
// console.log(i);


// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr[i] = function () {
//     console.log(i);
//   };
// }
// // 此时外界的i是10
// for (var i = 0; i < 10; i++) {
//   // 但是这里面有重新定义了i从0开始
//   arr[i]();
// }


// for(let i = 0; i < 10; i++){ // a是var或者let一样
//   i = 'a'; // 加不加var都一样，上面为let了下面就不能加var，碰到let就会报错
//   console.log(i);
// }

// for(let i = 0; i < 10; i++){ 
//   let i = 'a'; 
//   console.log(i);
// } 


// 块级作用域中声明拿书合法但并不推荐
// 但下面的函数表达式的方法可以
// try{
//   var test1 = function (){

//   }
// }catch(e){
//   var test2 = function (){

//   }
// }

// 只有这种方式有返回值，只是草案
// do{
//   return 1;
// }
