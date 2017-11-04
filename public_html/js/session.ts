///<reference path="../node_modules/@types/jquery/index.d.ts"/>

namespace Session {

    export class Session {

        public constructor(){
            console.log("fadsf");
        }

        public login() {
            var email = $("#email-txt").val();
            var pass = $("#pass-txt").val();
        
            if(true) { //No hay errores.
                $("#input-group-mail").removeClass("has-error");
                $("#input-group-pass").removeClass("has-error");
                window.location.href = "index.html";
            } else 
            {
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

        public logout() {
            
        }

    }
}