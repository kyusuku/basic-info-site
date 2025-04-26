const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    let fileName = "." + q.pathname + ".html";
    if (q.pathname === "/") {
      fileName = "./index.html";
    } else if (
      fileName !== "./contact-me.html" &&
      fileName !== "./about.html"
    ) {
      fileName = "./404.html";
    }
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
