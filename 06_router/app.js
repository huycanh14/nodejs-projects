var fs = require("fs");

function loadFile(path, res){
    res.writeHead(200, {"content-type":"text/html; charset=utf-8"});
    fs.ReadStream(path).pipe(res);
}
var load_router = function (req, res){
    var path = req.url;
    switch(path){
        case "/":
            loadFile("giaodien1.html", res);
            break;
        case "/tin-tuc":
            loadFile("giaodien2.html", res);
            break;
        default:
            res.writeHead(404);
            res.write("Không tìm thấy người dùng");
            break;
    }
}
module.exports.load_router = load_router;