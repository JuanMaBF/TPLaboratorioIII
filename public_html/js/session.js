"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var Session;
(function (Session_1) {
    class Session {
        constructor() {
            console.log("fadsf");
        }
        login() {
            var email = $("#email-txt").val();
            var pass = $("#pass-txt").val();
            if (true) {
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                window.location.href = "index.html";
            }
            else {
                /*if(true) { //Email tiene error
                    $("#input-group-mail").addClass("has-error");
                } else {
                    $("#input-group-mail").removeClass("has-error");
                }
                if(true) { //Password tiene error
                    $("#input-group-pass").addClass("has-error");
                } else {
                    $("#input-group-pass").removeClass("has-error");
                }*/
            }
        }
        logout() {
        }
    }
    Session_1.Session = Session;
})(Session || (Session = {}));
