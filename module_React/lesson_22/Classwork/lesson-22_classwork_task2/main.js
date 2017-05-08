/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Lesson 22, Classwork, Serhii Yakubovych
	 */
	/**
	 * ### Задача 2
	 * Используя Promise, асинхронно загрузите на страницу файл image.jpg,
	 * находящийся в папке Classwork рядом с файлом с задачами.
	 */

	"use strict";

	function downloadImage(imageUrl) {
	    return new Promise(function (resolve, reject) {
	        let xhr = new XMLHttpRequest();
	        xhr.responseType = 'blob';

	        xhr.open("GET", imageUrl);

	        xhr.onload = function () {
	            if (this.status === 200) {
	                resolve(this.response);
	            } else {
	                let error = new Error(this.statusText);
	                error.code = this.status;
	                reject(error);
	            }
	        };

	        xhr.onerror = function () {
	            reject(new Error("Network error."));
	        };

	        xhr.send();
	    });
	}

	function insertImage(blob) {
	    let img = document.createElement('img');
	    img.onload = function (e) {
	        window.URL.revokeObjectURL(img.src); // Clean up after yourself.
	    };
	    img.src = window.URL.createObjectURL(blob);
	    document.getElementById("output").appendChild(img);
	}

	downloadImage("../image.jpg").then(imageBlob => {
	    insertImage(imageBlob);
	}).catch(err => {
	    console.log(err);
	});

/***/ }
/******/ ]);