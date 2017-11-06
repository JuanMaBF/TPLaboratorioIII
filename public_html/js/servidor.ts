namespace servidor {

    export class servidor {

        public callback: Function;

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
            $("#modalAgregar").modal('hide');
            if(this.validatePatente()){
                let data = {
                    "action": "agregarAuto",
                    "nuevo": $("#patente-txt").val()
                }
            } else {

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
            if(($("#patente-txt").val() as string).length != 6){

            }
        }

    }
}