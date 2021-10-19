const http = require("http");

const url = "http://127.0.0.1:3000";

const request = http.request(url, (response) => {
  console.log(response.statusCode);

  response.on("data", (chunck) => {
    console.log(chunck.toString());
  });
});

request.end();
