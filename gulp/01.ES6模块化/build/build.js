(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.add = add;
        exports.getSum = getSum;

        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        function add(a, b) {
          return a + b;
        }

        var arr = [];

        var _loop = function _loop(i) {
          arr[i] = (function () {
            console.log(i);
          })(i);
        };

        for (var i = 0; i < 10; i++) {
          _loop(i);
        }

        function getSum(nums) {
          return nums.reduce(function (p, v) {
            return p + v;
          }, 0);
        }

        function test() {
          return _test.apply(this, arguments);
        }

        function _test() {
          _test = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              var c1;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return setTimeout(function () {
                        console.log("等一下");
                      }, 1000);

                    case 2:
                      c1 = _context.sent;
                      console.log("好了");

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          return _test.apply(this, arguments);
        }
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        var _add = require("./add");

        console.log((0, _add.add)(3, 4));
        console.log((0, _add.getSum)([1, 2, 3, 4, 5, 6, 7, 8, 9]));
      },
      { "./add": 1 },
    ],
  },
  {},
  [2]
);
