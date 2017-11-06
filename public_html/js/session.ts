///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>

namespace Session {

    export class Session {

        public servidor: servidor.servidor;

        public constructor(){
            this.servidor = new servidor.servidor();
            this.servidor.callback = this.login.bind(this);
        }

        public doLogin(){
            this.servidor.login();
        }

        public login(response: string): void {
            if(response != "noLogin") { //No hay errores.
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                $("#mensaje-login").html(" ");
                window.location.href = "index.html";
            } else 
            {
                $("#input-group-mail").addClass("has-error");
                $("#input-group-pass").addClass("has-error");
                $("#mensaje-login").html("Datos incorrectos");
            } 
        }

        public logout(){
            /* TODO: Proceso de deslogueo*/
            if(true) {
                window.location.href = "login.html";
            }
        }
    }
}

let session: Session.Session = new Session.Session();
function login(){
    session.doLogin();
}
function logout() {
    session.logout();
}

function testButtonNormal(){
    $("#email-txt").val("usuarioNormal@normalidad.com");
    $("#pass-txt").val("nedFlanders");
}

function testButtonAdmin(){
    $("#email-txt").val("adminCapoATR@soyrecapo.com");
    $("#pass-txt").val("tamoAcrivo123");
}