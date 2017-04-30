"use strict";

angular.module("ketApp.core")
    .directive("teamMember", function() {
        return {
            restrict: "E",
            scope: { member: "=" },
            templateUrl: "ket-app/components/team-member/team-member.tpl.html"
        };
    });