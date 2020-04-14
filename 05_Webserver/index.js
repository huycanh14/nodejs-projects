var http = require("http");
http.createServer(function(req, res){
    // res.writeHead(200, {"content-type":"text/plain; charset=utf-8"});
    res.writeHead(200, {"content-type":"text/html; charset=utf-8"});
    res.write("<h1>Server đã kết nối thành công, đây là kết quả trả về của Server </h1>");
    res.end();
}).listen(1234);