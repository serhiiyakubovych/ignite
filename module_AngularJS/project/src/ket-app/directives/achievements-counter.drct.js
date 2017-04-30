"use strict";

angular.module("ketApp.core")
    .directive("achievementsCounter", ["$document", "$timeout", function($document, $timeout) {
        return {
            restrict: "A",
            scope: { counterCollection: "=achievementsCounter" },
            link: function(scope, element, attribute) {

                $document.on("scroll", checkPositionForCounter);

                function checkPositionForCounter() {
                    const pageWidth = document.documentElement.clientWidth,
                        pageHeight = document.documentElement.clientHeight,
                        elemWidth = element[0].offsetWidth,
                        elemHeight = element[0].offsetHeight,
                        pagePos = {
                            left: pageXOffset,
                            right: pageXOffset + pageWidth,
                            top: pageYOffset,
                            bottom: pageYOffset + pageHeight
                        },
                        elemPos = {
                            left: element[0].getBoundingClientRect().left + pagePos.left,
                            right: element[0].getBoundingClientRect().left + pagePos.left + elemWidth,
                            top: element[0].getBoundingClientRect().top + pagePos.top,
                            bottom: element[0].getBoundingClientRect().top + pagePos.top + elemHeight
                        };

                    if (((elemPos.top > pagePos.top) && (elemPos.top < pagePos.bottom)) ||
                        ((elemPos.bottom > pagePos.top) && (elemPos.bottom < pagePos.bottom))) {
                        runCounter();
                        $document.off("scroll", checkPositionForCounter);
                    }
                }

                function runCounter() {
                    if (!angular.isDefined(scope.counterCollection.count)) {
                        return;
                    }

                    const startTime = performance.now(),
                        totalTime = 3000,
                        targetCount = scope.counterCollection.count;

                    scope.counterCollection.count = 0;
                    $timeout(timer, 20);

                    function timer() {
                        const timePassed = performance.now() - startTime,
                            percent = timePassed / totalTime;

                        if (percent >= 1) {
                            scope.counterCollection.count = targetCount;
                            return;
                        }

                        scope.counterCollection.count = parseInt(targetCount * percent);

                        $timeout(timer, 20);
                    }
                }
            }
        };
    }]);