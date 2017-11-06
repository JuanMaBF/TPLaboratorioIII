"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="./servidor.ts"/>
var gridCreator;
(function (gridCreator_1) {
    class gridCreator {
        constructor() {
            this.server = new servidor.servidor();
            this.server.callback = this.crearGrilla.bind(this);
        }
        crearGrillaAutos() {
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
            //this.crearGrilla(columnas, filas);
        }
        crearGrillaPagos() {
            var columnas = ["Patente", "Fecha", "Monto", "Usuario"];
            var filas = [
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"],
                ["MLD234", "12/06/17", "$500", "Pepito"]
            ];
            //this.crearGrilla(columnas, filas);
        }
        crearGrilla(dataStr) {
            console.log(dataStr);
            let data = JSON.parse(dataStr);
            let cols = data.cols;
            let rows = data.rows;
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
                newHtml += "<th scope=\"row\"><input type=\"checkbox\" class=\"checkbox-grilla\"></th>";
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
