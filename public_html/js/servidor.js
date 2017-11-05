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
        /*AUTO*/
        cargarAutos() {
            this.connection(this.AUTO_FILE_PATH, "cargarAutos");
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
        connection(path, data) {
            this.mostrarSpinner();
            setTimeout(this.ocultarSpinner, 1000);
            let dataObj = { "data": data };
            $.ajax({
                url: path,
                type: "post",
                data: dataObj,
                success: (response) => {
                    this.callback(response);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    console.log(textStatus, errorThrown);
                }
            });
        }
        mostrarSpinner() {
            console.log("mostrando");
        }
        ocultarSpinner() {
            console.log("ocultando");
        }
    }
    servidor_1.servidor = servidor;
})(servidor || (servidor = {}));
