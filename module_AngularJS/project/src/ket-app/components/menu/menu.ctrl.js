"use strict";

angular.module("ketApp.core")
    .controller("MenuCtrl", ["$scope", "MenuValue", function($scope, MenuValue) {
        const self = this;
        self.data = MenuValue;
    }]);