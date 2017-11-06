namespace servidor {

    export class servidor {

        public callback: Function;

        /*AUTO*/
        public cargarAutos(): void {
            let data = { 
                "action": "cargarAutos"
            };
            this.doConnection(data);
            console.log($("#btn-eliminar"));
            $("#btn-eliminar").click(this.eliminarAutos.bind(this));
        }

        public eliminarAutos(): void {
            let numeros = new Array<string>();
            $(".checkbox-grilla:checked").toArray().forEach(c => {
                let th = c.parentElement as HTMLElement;
                let tr = th.parentElement as HTMLElement;
                numeros.push((tr.lastElementChild as HTMLElement).innerHTML);
            });
            console.log(numeros);
            let data = { 
                "data": "eliminarAuto",
                "numeros": numeros
            };
            //this.doConnection
        } 

        public agregarAutos(patente: string, usuario: string): void {
        }

        /*USUARIO*/
        public traerTodosUsuarios() {

        }

        public eliminarUsuario(email: string) {

        }

        public agregarUsuario(email: string, contra: string) {

        }

        private doConnection(data: any){
            $("#modalSpinner").modal();
            setTimeout(() => { 
                $("#modalSpinner").modal('hide');
                this.connection(data);
            }, 1000);
        }

        private connection(data: any): void {
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
}