"use strict";
angular.module("ketApp.routes", ["ngRoute"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "ket-app/sections/home/home.tpl.html",
                controller: "HomeCtrl as home"
            })
            .when("/news/:id", {
                templateUrl: "ket-app/sections/news/news.tpl.html",
                controller: "NewsCtrl as news"
            })
            .otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('');
    }]);