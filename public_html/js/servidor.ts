namespace servidor {

    export class servidor {

        private SESSION_FILE_PATH: string = "./php/session.php";
        private AUTO_FILE_PATH: string = "./php/auto.php";
        private USUARIO_FILE_PATH: string = "./php/usuario.php";
        private PAGOS_FILE_PATH: string = "./php/pagos.php";

        /*AUTO*/
        public traerTodosAutos(): Array<Array<string>> {
            $.ajax({
                url: "./php/Test.php",
                type: "post",
                data: "fsdaf" ,
                success: function (response) {
                    console.log(response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                   console.log(textStatus, errorThrown);
                }
            });
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