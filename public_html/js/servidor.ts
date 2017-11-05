namespace servidor {

    export class servidor {

        public xmlHttp = new XMLHttpRequest();
        public callback = () => {
            if(this.xmlHttp.readyState == 4 && this.xmlHttp.status == 200){
                return this.xmlHttp.response;
            }
        }

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