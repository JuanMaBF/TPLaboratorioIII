///<reference path="../node_modules/@types/jquery/index.d.ts"/>

namespace gridCreator {

    export class gridCreator {

        /* CREAR GRILLA */
        public crearGrillaAutos() {
            var columnas = ["Patente", "Usuario", "Fecha"];
            var filas = [
                ["columna1a", "columna2a", "columna3a"],
                ["columna1b", "columna2b", "columna3b"],
                ["columna1c", "columna2c", "columna3c"],
                ["columna1d", "columna2d", "columna3d"],
                ["columna1e", "columna2e", "columna3e"],
                ["columna1f", "columna2f", "columna3f"]
            ];
            this.crearGrilla(columnas, filas);
        }

        public crearGrillaUsuarios() {
            var columnas = ["Nombre", "Estado"];
            var filas = [
                ["Pepito", "Funcionando"],
                ["Pepito", "Eliminado"],
                ["Pepito", "Sin aprobar"],
                ["Pepito", "Bloqueado"]
            ];
            this.crearGrilla(columnas, filas);
        }

        public crearGrillaPagos() {
            var columnas = ["Patente", "Fecha", "Monto", "Usuario"];
            var filas = [
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"]
            ];
            this.crearGrilla(columnas, filas);
        }

        private crearGrilla(cols: Array<string>, rows: Array<Array<string>>) {
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
                newHtml += "<th scope=\"row\"><input type=\"checkbox\" id=\"checkbox1\"></th>";
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