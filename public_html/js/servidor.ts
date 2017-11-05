namespace servidor {

    export class servidor {

        public callback: Function;

        private SESSION_FILE_PATH: string = "./php/session.php";
        private AUTO_FILE_PATH: string = "./php/auto.php";
        private USUARIO_FILE_PATH: string = "./php/usuario.php";
        private PAGOS_FILE_PATH: string = "./php/pagos.php";
        
        private 

        public connection(path: string, data: any, action: string): void {
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

        public cargarAutos(): void{
            this.connection(this.AUTO_FILE_PATH, "sadf");

        }

        /*AUTO*/
        public traerTodosAutos(): Array<Array<string>> {
            /*var aa = {};
            let a = 
            console.log(aa);*/
            return new Array<Array<string>>();
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


    }
}