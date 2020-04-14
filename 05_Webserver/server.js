var http = require("http");
var fs = require("fs");
http.createServer(function(req, res){
    // res.writeHead(200, {"content-type":"text/plain; charset=utf-8"});
    res.writeHead(200, {"content-type":"text/html; charset=utf-8"});
    fs.ReadStream("./index.html").pipe(res);
}).listen(3000);