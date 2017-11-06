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
        }
        eliminarAutos() {
            let data = {
                "action": "eliminarAutos",
                "numeros": this.getCheckedIDs()
            };
            this.doConnection(data);
        }
        agregarAuto() {
            $("#modalAgregar").modal('hide');
            if (this.validatePatente()) {
                let data = {
                    "action": "agregarAuto",
                    "nuevo": $("#patente-txt").val()
                };
            }
            else {
            }
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
        getCheckedIDs() {
            let numeros = new Array();
            $(".checkbox-grilla:checked").toArray().forEach(c => {
                let th = c.parentElement;
                let tr = th.parentElement;
                numeros.push(tr.lastElementChild.innerHTML);
            });
            return numeros;
        }
        validatePatente() {
            if ($("#patente-txt").val().length != 6) {
            }
        }
    }
    servidor_1.servidor = servidor;
})(servidor || (servidor = {}));
