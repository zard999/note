// fetch(url, option)
function fetch(url, { body = "", method = "GET", header = {} } = {}) {
  console.log(body, method);
}

fetch("www.baidu.com");
