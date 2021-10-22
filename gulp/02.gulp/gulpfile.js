const gulp = require("gulp");
const babel = require("gulp-babel");
gulp.task(
  "babel",
  () =>
    gulp
      .src("src/js/*.js") // 将 src/js 所有JS文件导入到gulp的流中
      .pipe(
        babel({
          // 使用babel对流中的文件进行编译
          // 将ES6语法编译成ES5以下语法
          // 将ES6模块化编译成commonjs
          presets: ["@babel/env"],
        })
      )
      .pipe(gulp.dest("dist/js"))
      .pipe(connect.reload())
  // 输出到dist目录下
);
//使用gulp babel 命令启动

const browserify = require("gulp-browserify");
const rename = require("gulp-rename");
gulp.task("browserify", function () {
  // 必须写return 否则报错
  return (
    gulp
      .src("dist/js/index.js")
      // 将commonjs模块化编译成浏览器能识别的语法
      .pipe(
        browserify({
          insertGlobals: true,
        })
      )
      .pipe(rename("build.js")) // 重命名
      .pipe(gulp.dest("./dist/js"))
      .pipe(connect.reload())
  );
});

//统一配置
gulp.task("js-dev", gulp.series(["babel", "browserify"]));

const less = require("gulp-less");
const concat = require("gulp-concat");
gulp.task("less", function () {
  return gulp
    .src("./src/less/*.less")
    .pipe(less()) // 将less编译成css
    .pipe(concat("all.css")) // 合并文件
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
});

gulp.task("html", function () {
  return gulp
    .src("./src/index.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

//统一配置
gulp.task("dev", gulp.parallel(["js-dev", "less", "html"]));

const connect = require("gulp-connect");
const { exec } = require("child_process");
gulp.task("connect", function () {
  // 创建一个服务器
  connect.server({
    port: 8888, // 端口号
    root: ["dist"], // 暴露目录
    livereload: true, // 自动刷新浏览器
  });
  // 自动打开浏览器(需要自己书写open方法)
  exec("start http://localhost:8888");
  // 当你修改源代码，自动编译
  // 自动监视 src/index.html 文件的变化，一旦文件发生变化就会执行后面
  gulp.watch("src/index.html", gulp.series(["html"]));
  gulp.watch("src/less/*.less", gulp.series(["less"]));
  gulp.watch("src/js/*.js", gulp.series(["js-dev"]));
});

gulp.task("watch", gulp.series(["dev", "connect"]));

// 生产环境
const uglify = require("gulp-uglify");
const cssmin = require("gulp-cssmin");
const htmlmin = require("gulp-htmlmin");

gulp.task("uglify", function () {
  return gulp
    .src("./dist/js/build.js")
    .pipe(uglify())
    .pipe(rename("build.min.js"))
    .pipe(gulp.dest("./build/js"));
});

gulp.task("cssmin", function () {
  return gulp
    .src("./dist/css/all.css")
    .pipe(cssmin())
    .pipe(rename("all.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task("htmlmin", function () {
  return gulp
    .src("./src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true, // 去除空格换行符
        removeComments: true, // 去除注释
      })
    )
    .pipe(gulp.dest("./build"));
});

gulp.task("js-prod", gulp.series(["js-dev", "uglify"]));
gulp.task("css-prod", gulp.series(["less", "cssmin"]));
gulp.task('build', gulp.parallel(['js-prod', 'css-prod', 'htmlmin']));
