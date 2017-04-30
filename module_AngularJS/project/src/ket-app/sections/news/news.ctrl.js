"use strict";

angular
    .module("ketApp.core")
    .controller("NewsCtrl", ["$scope", "$document", "$http", "$routeParams", "MenuValue",
        function($scope, $document, $http, $routeParams, MenuValue) {
        const self = this;

        MenuValue.items = [
            { id: "/home", display: "Home" }
        ];

        downloadNews();

        $document.scrollTo(0, 0, 500);

        function downloadNews() {
            $http({
                method: "GET",
                url: "assets/data/data.json"
            }).then((response) => {
                const newsArr = response.data,
                    requiredNewsId = +$routeParams.id;

                if (!Array.isArray(newsArr)) {
                    return;
                }

                for (let i = 0, newsCount = newsArr.length; i < newsCount; ++i) {
                    let news = newsArr[i];
                    if (requiredNewsId === news.id) {
                        self.sourceNews = news;
                        return;
                    }
                }
            }, (err) => {
                console.log("Cannot download news. " + err);
            });
        }
    }]);