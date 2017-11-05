"use strict";
var servidor;
(function (servidor_1) {
    class servidor {
        /*AUTO*/
        cargarAutos() {
            this.doConnection("cargarAutos");
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
        doConnection(action) {
            this.mostrarSpinner();
            setTimeout(() => {
                this.ocultarSpinner();
                this.connection(action);
            }, 1000);
        }
        connection(action) {
            let actionObj = { "action": action };
            $.ajax({
                url: "./php/servidor.php",
                type: "post",
                data: actionObj,
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
            $("#modalAgregar").modal();
        }
        ocultarSpinner() {
            console.log("ocultando");
        }
    }
    servidor_1.servidor = servidor;
})(servidor || (servidor = {}));
