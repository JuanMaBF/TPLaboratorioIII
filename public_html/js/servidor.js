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
            let numeros = new Array();
            $(".checkbox-grilla:checked").toArray().forEach(c => {
                let th = c.parentElement;
                let tr = th.parentElement;
                numeros.push(tr.lastElementChild.innerHTML);
            });
            console.log(numeros);
            let data = {
                "data": "eliminarAuto",
                "numeros": numeros
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
