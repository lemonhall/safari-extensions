var express = require('express');
var app=express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','bookmarks');



app.use(express.bodyParser({}));
app.use(express.methodOverride());

server.listen(8080);

db.on('error',console.error.bind(console,'error on opening db'));

db.once('open',function(){

});


var UrlSchema = new mongoose.Schema({
      url:String,
      title:String,
      summary:String,
      tags:String,   
      date:Date
});

var UrlModel = db.model('Url',UrlSchema);


// FOR CHROME TEST 
// var xhr = new XMLHttpRequest();
// var fd = new FormData();
// fd.append('url', "http://www.douban.com");
// fd.append('title', "douban");
// fd.append('summary', "豆瓣网啊");
// fd.append('tags', "网址");
// fd.append('date', "2013-12-14 23:08");

// xhr.open('POST', 'http://127.0.0.1:8080/set_url', true);
// xhr.send(fd);
app.post('/set_url', function (req, res) {

	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	var entity=req.body;

	var urlEntity = new UrlModel(entity);
		urlEntity.save();
	console.log(urlEntity);
  	

  	res.jsonp(urlEntity);
});


app.get('/', function (req, res) {

	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(req.query);
    //
    //refer cookbook:http://cookbook.mongodb.org/patterns/date_range/
    //		db.posts.ensureIndex({created_on: 1});
    //	or
    //		db.posts.ensureIndex({author: 1, created_on: 1});
	//		db.posts.find({author: "Mike", created_on: {$gt: start, $lt: end}});
	//  GET....
    //http://127.0.0.1:8080/?start=20131209&end=20131230
    var start_string = req.query.start;
    var end_string   = req.query.end;
    //   2 0 1 3 0 1 0 1
    //   0 1 2 3 4 5 6 7
    console.log(typeof start_string)
    var s_year   = parseInt(start_string.slice(0,4));
    var s_month  = parseInt(start_string.slice(4,6));
    var s_day    = parseInt(start_string.slice(6))
    //var e_year   = parseInt(end_string.slice(0,3));
    var e_year   = parseInt(end_string.slice(0,4));
    var e_month  = parseInt(end_string.slice(4,6));
    var e_day    = parseInt(end_string.slice(6))

    var start = new Date(s_year, s_month-1, s_day);
	var end = new Date(e_year, e_month-1, e_day);

	console.log(start);
	console.log(end);
 	UrlModel.find({date: {$gte: start, $lt: end}},function(err, doc) { 
        res.jsonp(doc); 
    });  	
});
