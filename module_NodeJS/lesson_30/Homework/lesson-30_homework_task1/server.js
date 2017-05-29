/**
 * Lesson 30, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте файловый сервер с помощью Express, который будет получать все данные из директории 'public'. 
 */

const express = require('express'),
      http = require("http"); 

var app = express(); 

app.set("port", process.env.port || 1337); 

app.use(express.static('public')); 

app.route('/')
	.all(function(req, res) {
		res.writeHead(301, {'Location':'index.html'}); 
		res.end();
    }); 

app.route('/enter')
	.get(function(req, res) {
        res.writeHead(301, {'Location': 'login.html'});
		res.end(); 
	});

http.createServer(app).listen(app.get("port"));