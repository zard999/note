function insert(value) {
  return {
    into(array) {
      return {
        after(afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value);
          return array;
        },
      };
    },
  };
}

// 注意：里面要返回方法{}大括号外面一定要加(),代表返回一个对象,{}会解析为块级作用域
// 这样做并不好，不建议这样写箭头函数
const insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    },
  }),
});

const insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(value) + 1, 0, value);
      return array;
    },
  }),
});

console.log(insert(5).into([1, 2, 3, 4, 6, 7, 8]).after(4));
