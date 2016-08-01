var express = require("express");
var app = express();

app.use(express.static("public"));

/*
 * 请求页面接口
*/
app.get('/', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html");
});
app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html");
});

app.get('/new.html', function (req, res) {
	res.sendFile( __dirname + "/" + "new.html");
});

app.get('/profile.html', function (req, res) {
	res.sendFile( __dirname + "/" + "profile.html");
});

app.get('/detail.html', function (req, res) {
	res.sendFile( __dirname + "/" + "detail.html");
});

/*
 * 请求数据接口
*/

app.get("/home/recommend/date/:date", function (req, res) {
	// 首页滚动
	var data = {
		callback: {
			date: req.params.date,
			code: 0,
			message: "请求成功"
		},
		result: [ {
			rid: "001",
			img: "images/banner1.jpg",
			title: "这样做的葡萄酒又香又甜!",
			author: 'jQuery37',
			portrait: "images/touxiang.jpg",
			url: "detail.html"
		},{
			rid: "002",
			img: "images/banner2.jpg",
			title: "别样下午茶~",
			author: 'Eziias',
			portrait: "images/touxiang.jpg",
			url: "detail.html"
		}]
	}

	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});  

	res.end(JSON.stringify(data));
});

app.get('/home/around/position/:position', function (req, res) {
	//  周围都在看
	var data = {
		callback: {
			position: req.params.position,
			code: 0,
			message: "请求成功"
		},
		result: [ {
			rid: "001",
			img: "images/banner1.jpg",
			title: "这样做的葡萄酒又香又甜!",
			author: 'jQuery37',
			portrait: "images/touxiang.jpg",
			url: "detail.html"
		},{
			rid: "002",
			img: "images/banner2.jpg",
			title: "别样下午茶~",
			author: 'Eziias',
			portrait: "images/touxiang.jpg",
			url: "detail.html"
		}]
	} 

	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});  

	res.end(JSON.stringify(data));
});

app.get('/home/best/page/:page', function (req, res) {
	//  精选
	var data = {
		callback: {
			page: req.params.page,
			code: 0,
			message: "请求成功"
		},
		result: [ {
			rid: "004",
			img: "images/food52.jpg",
			title: "酱香排骨",
			author: '小圆的厨房',
			portrait: "images/icon12.png",
			url: "detail.html",
			collect:"101",
    		browse: "2152"
		},{
			rid: "005",
			img: "images/food32.jpg",
			title: "芬香草莓果酱，带来春日的甜蜜",
			author: '丝滑巧克力',
			portrait: "images/touxiang.jpg",
			url: "detail.html",
			collect:"241",
    		browse: "2971"
		}]
	} 

	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});  

	res.end(JSON.stringify(data));
});

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为 http://%s:%s', host, port) ;
})