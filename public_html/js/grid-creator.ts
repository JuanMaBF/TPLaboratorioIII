///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>

namespace gridCreator {
    
    export class gridCreator {
        
        private server : servidor.servidor;

        public constructor() {
            this.server = new servidor.servidor();
            this.server.callback = this.crearGrilla.bind(this);
        }

        public crearGrillaAutos() {
            this.server.cargarAutos();
        }

        public crearGrillaUsuarios() {
            var columnas = ["Nombre", "Estado"];
            var filas = [
                ["Pepito", "Funcionando"],
                ["Pepito", "Eliminado"],
                ["Pepito", "Sin aprobar"],
                ["Pepito", "Bloqueado"]
            ];
            //this.crearGrilla(columnas, filas);
        }

        public crearGrillaPagos() {
            var columnas = ["Patente", "Fecha", "Monto", "Usuario"];
            var filas = [
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"]
            ];
            //this.crearGrilla(columnas, filas);
        }

        private crearGrilla(dataStr: string) {
            console.log(dataStr);
            let data = JSON.parse(dataStr);
            let cols = data.cols as Array<string>;
            let rows = data.rows as Array<Array<string>>;
            var cabecera = this.crearCabecera(cols);
            let newHtml = this.crearRows(cabecera, rows);
            $("#grilla").html(newHtml);
        }

        private crearCabecera(cols: Array<string>){
            let newHtml = "";
            newHtml += "<thead class=\"thead-dark\">";
            newHtml += "<tr>";
            newHtml += "<th scope=\"col\"></th>";
            cols.forEach(function(col: string) { newHtml += "<th scope=\"col\">" + col + "</th>"; });
            newHtml += "</tr>";
            newHtml += "</thead>";
            return newHtml;
        }

        private crearRows(cabecera: string, rows: Array<Array<string>>) {
            let newHtml = cabecera;
            newHtml += "<tbody>";
            rows.forEach(function(row){
                newHtml += "<tr>";
                newHtml += "<th scope=\"row\"><input type=\"checkbox\" class=\"checkbox-grilla\"></th>";
                row.forEach(function(el){
                    newHtml += "<td>" + el + "</td>";
                });
                newHtml += "</tr>";
            });
            return newHtml;
        }
    }
}

var grillaCreator: gridCreator.gridCreator;

window.onload = function() {
    grillaCreator = new gridCreator.gridCreator();
    grillaCreator.crearGrillaAutos();
};

function crearGrillaAutos() {
    grillaCreator.crearGrillaAutos();
}

function crearGrillaUsuarios() {
    grillaCreator.crearGrillaUsuarios();
}

function crearGrillaPagos() {
    grillaCreator.crearGrillaPagos();
}