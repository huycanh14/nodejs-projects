var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next) {
  res.render('insert', { title: 'Thêm mới dữ liệu' });
});

router.post('/insert', function(req, res, next) {
  let dulieu = {
    "ten" : req.body.ten,
    "dienthoai" : req.body.dt
  }
  
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('nguoidung');
    // Insert some documents
    collection.insert(dulieu, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted documents into the collection");
      callback(result);
    });
  }
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
      client.close();
    });
  });
  res.redirect('/')
});



module.exports = router;
