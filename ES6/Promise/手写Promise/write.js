function MyPromise(executor) {
  const _this = this;

  _this.state = "pending";
  _this.result = undefined;

  function resolve(value) {
    if (_this.state !== "pending") return;

    _this.state = "fulfilled";
    _this.result = value;

    setTimeout(() => {
      _this.onResolved && _this.onResolved(value);
    });
  }

  function reject(reason) {
    if (_this.state !== "pending") return;

    _this.state = "rejected";
    _this.result = reason;

    setTimeout(() => {
      _this.onRejected && _this.onRejected(reason);
    });
  }

  executor(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const _this = this;

  return new MyPromise((resolve, reject) => {
    _this.onResolved = function (value) {
      try {
        const result = onResolved(value);

        if (result instanceof MyPromise) {
          result.then(
            (val) => {
              resolve(val);
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

    _this.onRejected = function (value) {
      try {
        const result = onRejected(value);

        if (result instanceof MyPromise) {
          result.then(
            (val) => {
              resolve(val);
            },
            (rea) => {
              reject(rea);
            }
          );
        }
        elseP;
        resolve(result);
      } catch (e) {
        reject(e);
      }
    };
  });
};

MyPromise.prototype.catch = function (onResolved) {
  return this.then(null, onRejected);
};

MyPromise.prototype.finally = function (onResolved) {
  return this.then(
    (val) => {
      const result = onResolved();
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
        throw val;
      }
    },
    (rea) => {
      const result = onResolved();
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

MyPromise.resolve = function (info) {
  return new MyPromise((resolve, reject) => {
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

MyPromise.reject = function (info) {
  return new MyPromise((resolve, reject) => {
    reject(info);
  });
};

MyPromise.prototype.all = function (allPromise) {
  return new MyPromise((resolve, reject) => {
    let count = 0;
    let arr = [];

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
  return new MyPromise((resolve, reject) => {
    let count = 0;
    let arr = [];
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
