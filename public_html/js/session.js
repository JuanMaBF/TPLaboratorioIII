"use strict";
var Session;
(function (Session_1) {
    var Session = /** @class */ (function () {
        function Session() {
        }
        Session.prototype.login = function () {
            var email = $("#email-txt").val();
            var pass = $("#pass-txt").val();
            if (false) {
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                window.location.href = "index.html";
            }
            else {
                if (true) {
                    $("#input-group-mail").addClass("has-error");
                }
                else {
                    $("#input-group-mail").removeClass("has-error");
                }
                if (true) {
                    $("#input-group-pass").addClass("has-error");
                }
                else {
                    $("#input-group-pass").removeClass("has-error");
                }
            }
        };
        return Session;
    }());
    Session_1.Session = Session;
})(Session || (Session = {}));
