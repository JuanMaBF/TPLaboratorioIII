"use strict";
var servidor;
(function (servidor_1) {
    class servidor {
        constructor() {
            this.xmlHttp = new XMLHttpRequest();
            this.callback = () => {
                if (this.xmlHttp.readyState == 4 && this.xmlHttp.status == 200) {
                    return this.xmlHttp.response;
                }
            };
        }
        /*AUTO*/
        traerTodosAutos() {
            $.ajax({
                url: "./php/Test.php",
                type: "post",
                data: "fsdaf",
                success: function (response) {
                    console.log(response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
            return new Array();
        }
        eliminarAutos(patente) {
            return true;
        }
        agregarAutos(patente, usuario) {
            return true;
        }
        /*USUARIO*/
        traerTodosUsuarios() {
        }
        eliminarUsuario(email) {
        }
        agregarUsuario(email, contra) {
        }
    }
    servidor_1.servidor = servidor;
})(servidor || (servidor = {}));
