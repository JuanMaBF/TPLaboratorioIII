"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var Session;
(function (Session_1) {
    class Session {
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
            /* TODO: Proceso de deslogueo*/
            if (true) {
                window.location.href = "login.html";
            }
        }
    }
    Session_1.Session = Session;
})(Session || (Session = {}));
let session = new Session.Session();
function login() {
    session.login();
}
function logout() {
    session.logout();
}
