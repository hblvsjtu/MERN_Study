 /**
  * filename: app.js
  * @authors Lv Hongbin (hblvsjtu@163.com)
  * @date    2018-06-19 11:52:54
  * @version 1.0.0
  * @description test for express
  */

 var express = require('express');
 var app = express();
 var router = express.Router();

 // 创建模块化、可挂载的路由句柄
 router.use(function timeLog(req, res, next) {
 	console.log('Time: ', (new Date()).toLocaleString());
 	next();
 });
 router.get('/:props', function(req, res) {
 	res.send(`the about = ${req.session}`);
 });
 app.get('/router', router);
 //  创建路由路径的链式路由句柄
 app.route('/index')
 	.get(function(req, res) { // 网站首页接受 GET 请求
 		res.send('Got a GET request');
 	})
 	.post(function(req, res) { // 网站首页接受 POST 请求	
 		res.send('Got a POST request');
 	})
 	.put(function(req, res) { //user 节点接受 PUT 请求
 		res.send('Got a PUT request at /user');
 	})
 	.delete(function(req, res) { //user 节点接受 DELETE 请求
 		res.send('Got a DELETE request at /user');
 	});

 app.get('/home', function(req, res) {
 	res.send('Got a GET request from home');
 });

 app.use(express.static('./static'));
 var server = app.listen(3000, function() {
 	var host = server.address().address;
 	var port = server.address().port;

 	console.log('Example app listening at http://%s:%s', host, port);
 });