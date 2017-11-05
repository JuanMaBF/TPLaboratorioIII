namespace servidor {

    export class servidor {

        public callback: Function;

        /*AUTO*/
        public cargarAutos(): void {
            this.doConnection("cargarAutos");
        }

        public eliminarAutos(patente: string): boolean {
            return true;
        } 

        public agregarAutos(patente: string, usuario: string): boolean {
            return true;
        }

        /*USUARIO*/
        public traerTodosUsuarios() {

        }

        public eliminarUsuario(email: string) {

        }

        public agregarUsuario(email: string, contra: string) {

        }

        private doConnection(action: string){
            this.mostrarSpinner();
            setTimeout(() => { 
                this.ocultarSpinner();
                this.connection(action);
            }, 1000);
        }

        private connection(action: string): void {
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

        private mostrarSpinner(): void {
            console.log("mostrando");
            $("#modalAgregar").modal();
        }

        private ocultarSpinner(): void {
            console.log("ocultando");
        }

    }
}