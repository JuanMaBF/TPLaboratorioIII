"use strict";
var servidor;
(function (servidor_1) {
    class servidor {
        /*AUTO*/
        cargarAutos() {
            let data = {
                "action": "cargarAutos"
            };
            this.doConnection(data);
            console.log($("#btn-eliminar"));
            $("#btn-eliminar").click(this.eliminarAutos.bind(this));
        }
        eliminarAutos() {
            console.log("fadsf");
            var ch = $(".checkbox-grilla:checked");
            console.log(ch);
            let data = {
                "data": "eliminarAuto",
                "numeros": 124
            };
            //this.doConnection
        }
        agregarAutos(patente, usuario) {
        }
        /*USUARIO*/
        traerTodosUsuarios() {
        }
        eliminarUsuario(email) {
        }
        agregarUsuario(email, contra) {
        }
        doConnection(data) {
            $("#modalSpinner").modal();
            setTimeout(() => {
                $("#modalSpinner").modal('hide');
                this.connection(data);
            }, 1000);
        }
        connection(data) {
            $.ajax({
                url: "./php/servidor.php",
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
    }
    servidor_1.servidor = servidor;
})(servidor || (servidor = {}));
