# MERN_Study

        
## 作者：冰红茶  
## 参考书籍：《Pro MERN Stack》 Vasan Subramanian 【著】 杜伟 柴晓伟 涂曙光 【译】
## 参考源：[Express：https://expressjs.com/](https://expressjs.com/) 
## 参考源：[Express中文网：http://www.expressjs.com.cn/](http://www.expressjs.com.cn/) 
## 参考源：[Express GitHub：https://github.com/expressjs/express](https://github.com/expressjs/express) 
## 参考源：[MongoDB：https://www.mongodb.com/](https://www.mongodb.com/) 
## [本书源码地址 https://github.com/vasansr/pro-mern-stack](https://github.com/vasansr/pro-mern-stack)
## [笔者源码地址]()
        
------    
        


  MEAN全栈开发，指的是使用MongoDB、Express、React和Node四种主要技术进行Web应用的开发。因为之前已经接触过React和Node，正好趁此次机会把MongoDB和Express掌握，并加深对React和Node的理解，逐渐转迈进全端^_ ^
     
## 目录
## [一、简介](#1)
### [1.1 背景](#1.1)
### [1.2 需要用到的工具或者库](#1.2)
### [1.3 为什么要使用MERN技术栈](#1.3)
## [二、Express](#2)
### [2.1 背景](#2.1)
### [2.2 需要用到的工具或者库](#2.2)
### [2.3 利用 Express 托管静态文件](#2.3)
## [三、MongoDB](#3)
### [3.1 背景](#2.1)
### [3.2 需要用到的工具或者库](#3.2)
### [3.3 利用 Express 托管静态文件](#3.3)
        
------
        
        

        
<h2 id='1'> 一、简介</h2>
<h3 id='1.1'>1.1 背景</h3>  
        
#### 1) 技术栈的演变
> - 技术栈是各种最佳实践和模式的总结和沉淀，通常指开发一个完整Web应用程序时所需的特定工具、库、框架的组合
> - 最早期的LAMP（Linux、Apache、MySql和PHP）
> - 中期的MEAN（MongoDB、Express、AngularJS和Node.js）MVC
> - 如今的MERN（MongoDB、Express、React和Node.js）
        
<h3 id='1.2'>1.2 需要用到的工具或者库</h3>  
        
#### 1) Node.js
> - 一个浏览器之外的JavaScript运行时
> - 在浏览器中如果需要加载一个或者多个JavaScript文件，那么需要在HTML文件中嵌入script标签
> - 但是对于Node.js而言，则不需要引入HTML文件
> - Node.js拥有属于自己的、基于CommonJS的模块化系统，来负加载多个JavaScript文件
> - 异步的，事件驱动的，非阻塞式的I/O模型
#### 2) Express 
> - 直接使用Node.js徒手写一个功能完整的Web服务器既不容易，也没有必要
> - Express就是一个用来简化编写服务器代码的基于Node.js的框架
> - Express可以让你定义路由，所谓路由就是一种规范，它决定一个HTTP请求在匹配了某个特定模式后要执行何种操作，而这种匹配规范正式基于正则表达式，所以非常的灵活
> - 另外会为你解析请求的URL，主机头和参数
#### 3) MongoDB
> - MongoDB时NoSQL非关系型的数据库
> - 相比于传统数据库(传统的就是那种有表和列的数据库)，NoSQL非关系型的数据库有两个重要的特点：
>> - 通过负载分布到多台数据库之上的水平拓展能力，但是也牺牲了强一致性的保证，即位于多个数据存储复制点的数据在极短的时间内可以是不一致的
>> - 避免在应用对象和关系型数据库中的数据之间添加一个额外的转换层，以进行双向转换
> - 面向文档  优点：支持多层嵌套 缺点：数据以非格式化的方式进行存储，数据有可能会有重复，而且需要更多的存储空间，另外对于类似重命名一个主条目这样的操作，就意味着需要扫描整个数据库
 
>>>> ** ** | **关系型数据库** | **非关系型数据库**
>>>> -|-|-
>>>> **存储单元** | 数据行 | 文档或者对象
>>>> **存储集合** | 数据表 | 集合    

> - 无预定义的结构：存储数据的对象无需遵循相同的一个预定义的结构，这看起来非常方便，但是实质上是吧保证数据一致性的责任从数据库转移到应用代码当中
> - 基于JavaScript crud都是基于JSON来交互的 拥有自己的shell，可以使用JavaScript进行交互
#### 4) React
> - 功能：视图渲染和管理单个组件的交互
#### 5）React-Router
> - 什么是路由？管理URL和浏览器history的功能被称为路由。
> - 在保持浏览器URL和当前视图状态同步的同时，进行组件不同视图之间进行切换
> - 还管理着类似浏览器后退按钮的功能，不需要经过服务器端的加载整个页面，用户就可以在不同的视图之间进行转换 
#### 6) React-Bootstrap
> - 适配到React中的Bootstrap CSS框架
#### 7) webpack
> - 对代码进行模块化的管理
        
<h3 id='1.3'>1.3 为什么要使用MERN技术栈</h3>  
        
#### 1) 清一色的JavaScript语言
#### 2) 清一色的JSON数据格式
#### 3) Node.js性能

<h2 id='2'> 二、Express</h2>
<h3 id='2.1'>2.1 安装</h3>  
        
#### 1) npm安装
> - cli版本的安装
                
                LvHongbins-Mac-2:ExpressTest lvhongbin$ npm install express-generator -g
                /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/express -> /Users/lvhongbin/software/node-v10.3.0-darwin-x64/lib/node_modules/express-generator/bin/express-cli.js
                + express-generator@4.16.0
                added 10 packages from 13 contributors in 6.128s
                LvHongbins-Mac-2:ExpressTest lvhongbin$ ln -s /Users/lvhongbin/software/node-v10.3.0-darwin-x64/bin/express /usr/local/bin/express
                LvHongbins-Mac-2:ExpressTest lvhongbin$ express --version
                4.16.0
> - api版本安装
                
                npm install express --save
                npm notice created a lockfile as package-lock.json. You should commit this file.
                npm WARN ExpressTest@1.0.0 No description
                npm WARN ExpressTest@1.0.0 No repository field.

                + express@4.16.3
                added 50 packages from 47 contributors and audited 119 packages in 3.788s
                found 0 vulnerabilities
#### 2) 一个最简单的例子
> - app.js
                
                var express = require('express');
                var app = express();

                app.get('/', function (req, res) {
                  res.send('Hello World!');
                });

                var server = app.listen(3000, function () {
                  var host = server.address().address;
                  var port = server.address().port;

                  console.log('Example app listening at http://%s:%s', host, port);
                });

        
<h3 id='2.2'>2.2 一个简单的 Express 路由</h3>  
        
#### 1) app.METHOD(PATH, HANDLER)
> - var app = express();
> - 路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。
> - 路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下： app.METHOD(path, [callback...], callback)， app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。
#### 2) 响应方法
> - 下表中响应对象（res）的方法向客户端返回响应，终结请求响应的循环。如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。

>>>> **方法** | **描述**
>>>> -|-
>>>> res.download() | 提示下载文件。
>>>> res.end() | 终结响应处理流程。
>>>> res.json() | 发送一个 JSON 格式的响应。
>>>> res.jsonp() | 发送一个支持 JSONP 的 JSON 格式的响应。
>>>> res.redirect() | 重定向请求。
>>>> res.render() | 渲染视图模板。
>>>> res.send() | 发送各种类型的响应。
>>>> res.sendFile | 以八位字节流的形式发送文件。
>>>> res.sendStatus() | 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
        
#### 3) app.all() 
> - var app = express();
> - 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
> - res方法只会在最后一个函数中起作用
> - res方法没有在最后一个函数中出现，而在前面就出现了，那么res方法后面的中间件将不能使用
> - 如
                
                app.get('/example/b', function (req, res, next) {
                  console.log('response will be sent by the next function ...');
                  next();
                }, function (req, res) {
                  res.send('Hello from B!');
                });

                // 或者采用数组的形式
                var cb0 = function (req, res, next) {
                  console.log('CB0');
                  next();
                }

                var cb1 = function (req, res, next) {
                  console.log('CB1');
                  next();
                }

                var cb2 = function (req, res) {
                  res.send('Hello from C!');
                }

                app.get('/example/c', [cb0, cb1, cb2]);
#### 4) app.route()
> - var app = express();
> - 可使用 app.route() 创建路由路径的链式路由句柄。
> - 支持单路径的不同方法调度
                
                app.route('/book')
                  .get(function(req, res) {
                    res.send('Get a random book');
                  })
                  .post(function(req, res) {
                    res.send('Add a book');
                  })
                  .put(function(req, res) {
                    res.send('Update the book');
                  });
#### 5) express.Router
> - var router = express.Router();
> - 支持中间件多路径多方法的调度
> - 只能使用冒号作为参数，用来过滤相应的地址
> - 需要把引用赋给app
> - 使得多个地址可以经过同一个中间件
                
                var express = require('express');
                var app = express();
                var router = express.Router();

                // 该路由使用的中间件
                router.use(function timeLog(req, res, next) {
                    console.log('Time: ', Date.now());
                    next();
                });
                router.get('/:about', function(req, res) {
                    res.send(`the about = ${req.about}`);
                });

                app.get('/index', router);

                var server = app.listen(3000, function() {
                    var host = server.address().address;
                    var port = server.address().port;

                    console.log('Example app listening at http://%s:%s', host, port);
                });
#### 6) 正则表达式
> - 不需要加引号
                
                // 匹配任何路径中含有 a 的路径：
                app.get(/a/, function(req, res) {
                  res.send('/a/');
                });

                // 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
                app.get(/.*fly$/, function(req, res) {
                  res.send('/.*fly$/');
                });

        
<h3 id='2.3'>2.3 利用 Express 托管静态文件</h3>  
        
#### 1) 中间件express.static
> - 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了
> - 使用app.use()可以加载中间件
> - 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 。中间件访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。
> - 如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：
            
            app.use('/static', express.static('public'));
            http://localhost:3000/static/images/kitten.jpg
            http://localhost:3000/static/css/style.css
            http://localhost:3000/static/js/app.js
            http://localhost:3000/static/images/bg.png
            http://localhost:3000/static/hello.html
> - 
                