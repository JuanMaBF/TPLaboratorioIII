namespace servidor {

    export class servidor {

        public callback: Function;

        private SESSION_FILE_PATH: string = "./php/session.php";
        private AUTO_FILE_PATH: string = "./php/auto.php";
        private USUARIO_FILE_PATH: string = "./php/usuario.php";
        private PAGOS_FILE_PATH: string = "./php/pagos.php";

        /*AUTO*/
        public cargarAutos(): void {
            this.connection(this.AUTO_FILE_PATH, "cargarAutos");
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

        private connection(path: string, data: string): void {
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

        private mostrarSpinner(): void {
            console.log("mostrando");
        }

        private ocultarSpinner(): void {
            console.log("ocultando");
        }

    }
}