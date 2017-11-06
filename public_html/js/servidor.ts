namespace servidor {

    export class servidor {

        public callback: Function;

        /*LOGIN*/
        public login() {
            let data = {
                "action": "login",
                "email": $("#email-txt").val(),
                "pass": $("#pass-txt").val()
            };
            this.doConnection(data);
        }

        /*AUTO*/
        public cargarAutos(): void {
            let data = { 
                "action": "cargarAutos"
            };
            this.doConnection(data);
        }

        public eliminarAutos(): void {
            let data = { 
                "action": "eliminarAutos",
                "numeros": this.getCheckedIDs()
            };
            this.doConnection(data);
        } 

        public agregarAuto(): void {
            if(this.validatePatente()){
                $("#modalAgregar").modal('hide');
                let data = {
                    "action": "agregarAuto",
                    "nuevo": $("#ingresar-txt").val()
                }
                this.doConnection(data);
            } else {
                $("#input-group-ingresar").addClass("has-error");
            }
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

        private getCheckedIDs(): Array<string> {
            let numeros = new Array<string>();
            $(".checkbox-grilla:checked").toArray().forEach(c => {
                let th = c.parentElement as HTMLElement;
                let tr = th.parentElement as HTMLElement;
                numeros.push((tr.lastElementChild as HTMLElement).innerHTML);
            });
            return numeros;
        }

        private validatePatente(): boolean {
            if(($("#ingresar-txt").val() as string).length == 6){
                return true;
            } else {
                return false;
            }
        }

    }
}