function MyPromise(executor) {
  const _this = this;
  _this.statu = "pending";
  _this.result = undefined;
  function resolve(value) {
    if (_this.statu === "pending") {
      return;
    }
    _this.statu = "fulfilled";
    _this.result = value;
    setTimeout(() => {
      this.onFulfilled && _this.onFulfilled(value);
    });
  }

  function reject(value) {
    if (_this.statu === "pending") {
      return;
    }
    _this.statu = "rejected";
    _this.result = value;
    setTimeout(() => {
      _this.onRejected && _this.onRejected();
    });
  }
  executor(resolve, reject);
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;
  return new MyPromise((resolve, reject) => {
    _this.onFulfilled = function (value) {
      try {
        const result = onFulfilled(value);
        if (result instanceof MyPromise) {
          result.then(
            (val) => {
              resolve(val);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    };

    _this.onRejected = function (reason) {
      try {
        const result = onRejected(reson);
        if (result instanceof MyPromise) {
          result.then(
            (val) => {
              resolve(value);
            },
            (rea) => {
              reject(rea);
            }
          );
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    };
  });
};

MyPromise.prototype.catch = function (onFulfilled) {
  return this.then(null, onRejected);
};

MyPromise.prototype.finally = function (onFulfilled) {
  return this.then(
    (val) => {
      const result = onFulfilled();
      if (result instanceof MyPromise) {
        return result.then(
          (val) => {
            return val;
          },
          (rea) => {
            throw rea;
          }
        );
      } else {
        return val;
      }
    },
    (rea) => {
      const result = onFulfilled();
      if (result instanceof MyPromise) {
        return result.then(
          (val) => {
            throw rea;
          },
          (rea) => {
            throw rea;
          }
        );
      } else {
        throw rea;
      }
    }
  );
};

MyPromise.prototype.resolve = function (info) {
  return new Promise((resolve, reject) => {
    if (info instanceof MyPromise) {
      info.then(
        (val) => {
          resolve(val);
        },
        (rea) => {
          reject(rea);
        }
      );
    } else {
      resolve(info);
    }
  });
};

MyPromise.prototype.reject = function (info) {
  return new MyPromise((resolve, reject) => {
    reject(info);
  });
};

MyPromise.all = function (allPromise) {
  let count = 0;
  let arr = [];
  return new MyPromise((resolve, reject) => {
    allPromise.forEach((item, index) => {
      item.then(
        (val) => {
          count++;
          arr[index] = val;
          if (count === arr.length) {
            resolve(arr);
          }
        },
        (rea) => {
          reject(rea);
        }
      );
    });
  });
};

MyPromise.prototype.allSettled = function (allPromise) {
  return new Promise((resolve, reject) => {
    allPromise.forEach((item, index) => {
      item.then(
        (val) => {
          count++;
          arr[index] = item;
          if (count === arr.length) {
            resolve(arr);
          }
        },
        (rea) => {
          count++;
          arr[index] = item;
          if (count === arr.length) {
            resolve(arr);
          }
        }
      );
    });
  });
};
