"use strict";
/// <reference path="../jquery/jquery.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        $(".btn-salir").first();
        return 0;
    };
    return Startup;
}());
exports.Startup = Startup;
Startup.main();
