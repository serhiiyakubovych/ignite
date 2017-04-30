"use strict";

angular.module("ketApp.core")
    .value("MenuValue", {
        items: [
            { id: "/home", display: "Home" },
            { id: "/news/5", display: "News" }
            ]});