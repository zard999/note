const http = require("http");
const url = require("url");

function start(route) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    // const query = url.parse(request.url).query;
    console.log(`Request for ${pathname} received`);
    // console.log(`Request for ${query} received`);
    route(pathname);
    response.setHeader("Content-Type", "text/plain;charset=uft8");
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.start = start;
