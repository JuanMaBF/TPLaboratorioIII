"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>
var Session;
(function (Session_1) {
    class Session {
        constructor() {
            this.servidor = new servidor.servidor();
            this.servidor.callback = this.login.bind(this);
        }
        doLogin() {
            this.servidor.login();
        }
        login(response) {
            if (response != "noLogin") {
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                $("#mensaje-login").html(" ");
                window.location.href = "index.html";
            }
            else {
                $("#input-group-mail").addClass("has-error");
                $("#input-group-pass").addClass("has-error");
                $("#mensaje-login").html("Datos incorrectos");
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
    session.doLogin();
}
function logout() {
    session.logout();
}
function testButtonNormal() {
}
function testButtonAdmin() {
}
