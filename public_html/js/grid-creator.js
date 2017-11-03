"use strict";
var grildCreator;
(function (grildCreator) {
    function crearGrilla(cols, rows) {
        var cabecera = crearCabecera(cols);
        var newHtml = crearRows(cabecera, rows);
        $("#grilla").html(newHtml);
    }
    grildCreator.crearGrilla = crearGrilla;
    function crearCabecera(cols) {
        var newHtml = "";
        newHtml += "<thead class=\"thead-dark\">";
        newHtml += "<tr>";
        newHtml += "<th scope=\"col\"></th>";
        cols.forEach(function (col) { newHtml += "<th scope=\"col\">" + col + "</th>"; });
        newHtml += "</tr>";
        newHtml += "</thead>";
        return newHtml;
    }
    function crearRows(cabecera, rows) {
        var newHtml = cabecera;
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
})(grildCreator || (grildCreator = {}));
