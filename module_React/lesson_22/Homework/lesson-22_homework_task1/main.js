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
	 * Lesson 22, Homework, Serhii Yakubovych
	 */
	/**
	 * ### Задача 1
	 * Создайте класс Person со слеюующими свойствами:
	 * *  Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”),
	 * lastName(значение по умолчанию – “Doe”), age(по умолчанию, если свойство не указано, то 0)
	 * и gender(по умолчанию – “Male”). Значения записываются в this.firstName, this.lastName, this.age и
	 * this.gender соответственно.
	 *  Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
	 *  Метод sayHi, который выводит на экран текст “Hello, my  name is “ + fullName.
	 */

	class Person {
	    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.age = age;
	        this.gender = gender;
	    }

	    fullName() {
	        return `${this.firstName} ${this.lastName}`;
	    }

	    sayHi() {
	        console.log(`Hello, my  name is ${this.fullName()}`);
	    }
	}

/***/ }
/******/ ]);