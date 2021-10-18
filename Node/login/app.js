require("./db");
const express = require("express");
const { resolve } = require("path");
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(express.static(resolve(__dirname, "./views")));
app.use("/public/", express.static(resolve(__dirname, "./public")));

const registerRouter = require("./routers/registerRouter");
const loginRouter = require("./routers/loginRouter");

app.use(registerRouter);
app.use(loginRouter);

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务已开启 http://localhost:4000");
});
