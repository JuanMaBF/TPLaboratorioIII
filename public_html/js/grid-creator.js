"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>
var gridCreator;
(function (gridCreator_1) {
    class gridCreator {
        constructor() {
            this.server = new servidor.servidor();
            this.server.callback = this.testMethod;
        }
        /* CREAR GRILLA */
        crearGrillaAutos() {
            /*var columnas = ["Patente", "Usuario", "Fecha"];
            var filas = [
                ["columna1a", "columna2a", "columna3a"],
                ["columna1b", "columna2b", "columna3b"],
                ["columna1c", "columna2c", "columna3c"],
                ["columna1d", "columna2d", "columna3d"],
                ["columna1e", "columna2e", "columna3e"],
                ["columna1f", "columna2f", "columna3f"]
            ];
            var server = new servidor.servidor();
            server.traerTodosAutos();
            this.crearGrilla(columnas, filas);*/
            this.server.cargarAutos();
        }
        crearGrillaUsuarios() {
            var columnas = ["Nombre", "Estado"];
            var filas = [
                ["Pepito", "Funcionando"],
                ["Pepito", "Eliminado"],
                ["Pepito", "Sin aprobar"],
                ["Pepito", "Bloqueado"]
            ];
            this.crearGrilla(columnas, filas);
        }
        crearGrillaPagos() {
            var columnas = ["Patente", "Fecha", "Monto", "Usuario"];
            var filas = [
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"]
            ];
            this.crearGrilla(columnas, filas);
        }
        crearGrilla(cols, rows) {
            var cabecera = this.crearCabecera(cols);
            let newHtml = this.crearRows(cabecera, rows);
            $("#grilla").html(newHtml);
        }
        crearCabecera(cols) {
            let newHtml = "";
            newHtml += "<thead class=\"thead-dark\">";
            newHtml += "<tr>";
            newHtml += "<th scope=\"col\"></th>";
            cols.forEach(function (col) { newHtml += "<th scope=\"col\">" + col + "</th>"; });
            newHtml += "</tr>";
            newHtml += "</thead>";
            return newHtml;
        }
        crearRows(cabecera, rows) {
            let newHtml = cabecera;
            newHtml += "<tbody>";
            rows.forEach(function (row) {
                newHtml += "<tr>";
                newHtml += "<th scope=\"row\"><input type=\"checkbox\" id=\"checkbox1\"></th>";
                row.forEach(function (el) {
                    newHtml += "<td>" + el + "</td>";
                });
                newHtml += "</tr>";
            });
            return newHtml;
        }
    }
    gridCreator_1.gridCreator = gridCreator;
})(gridCreator || (gridCreator = {}));
var grillaCreator;
window.onload = function () {
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
