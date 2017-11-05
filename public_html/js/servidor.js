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
            $.ajax({
                url: path,
                type: "post",
                data: data,
                success: (response) => {
                    this.callback(response);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log(textStatus, errorThrown);
                }
            });
        }
        /*AUTO*/
        traerTodosAutos() {
            this.connection(this.AUTO_FILE_PATH, "traerAutos");
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
