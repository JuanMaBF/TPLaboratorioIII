"use strict";
var servidor;
(function (servidor_1) {
    class servidor {
        constructor() {
            this.SESSION_FILE_PATH = "./php/session.php";
            this.AUTO_FILE_PATH = "./php/auto.php";
            this.USUARIO_FILE_PATH = "./php/usuario.php";
            this.PAGOS_FILE_PATH = "./php/pagos.php";
        }
        connection(path, data) {
            let respon;
            $.ajax({
                url: "./php/Test.php",
                type: "post",
                data: "fsdaf",
                success: (response) => {
                    respon = response;
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log(textStatus, errorThrown);
                }
            });
            return respon;
        }
        /*AUTO*/
        traerTodosAutos() {
            let a = this.connection(this.SESSION_FILE_PATH, "");
            console.log(a);
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
