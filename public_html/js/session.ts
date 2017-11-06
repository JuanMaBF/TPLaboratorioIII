///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>

namespace Session {

    export class Session {

        public servidor: servidor.servidor;

        public constructor(){
            this.servidor = new servidor.servidor();
            this.servidor.callback = this.login.bind(this);
        }

        public login(response: string): void {
            if(response != "noLogin") { //No hay errores.
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                window.location.href = "index.html";
            } else 
            {
                $("#input-group-mail").addClass("has-error");
                $("#input-group-pass").addClass("has-error");
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
    session.login();
}
function logout() {
    session.logout();
}