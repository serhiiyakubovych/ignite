"use strict";

angular.module("ketApp.core")
    .directive("newsBlock", function() {
        return {
            restrict: "E",
            templateUrl: "ket-app/components/news-block/news-block.tpl.html",
            scope: {
                news: "=",
                hasReadMoreLink: "@"
            },
            link: function(scope, element, attributes) {
                if (!scope.news) {
                    scope.news = {};
                }

                saveDayAndMonthIntoScope();

                scope.$watch("news", function(newValue, oldValue) {
                    saveDayAndMonthIntoScope();
                });

                function saveDayAndMonthIntoScope() {
                    if (!scope.news.date) {
                        return;
                    }
                    const months = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"],
                        monthPattern = /\d\d?(?=\/\d\d?\/\d{1,4})/,
                        monthNum = monthPattern.exec(scope.news.date)[0],
                        dayPattern = /(?=\d\d?\/)\d\d?(?=\/\d{1,4})/,
                        day = dayPattern.exec(scope.news.date)[0];

                    if ((monthNum) && (monthNum >= 1) && (monthNum <= 12)) {
                        scope.news.month = months[monthNum - 1];
                    } else {
                        scope.news.month = "";
                    }

                    if ((day) && (day >= 1) && (day <= 31)) {
                        scope.news.day = (day.length <= 1) ? `0${day}` : day;
                    } else {
                        scope.news.day = 1;
                    }
                }
            }
        };
    });