///<reference path="../node_modules/@types/jquery/index.d.ts"/>

namespace grildCreator {

    export function crearGrilla(cols: Array<string>, rows: Array<Array<string>>) {
        var cabecera = crearCabecera(cols);
        let newHtml = crearRows(cabecera, rows);
        $("#grilla").html(newHtml);
    }

    function crearCabecera(cols: Array<string>){
        let newHtml = "";
        newHtml += "<thead class=\"thead-dark\">";
        newHtml += "<tr>";
        newHtml += "<th scope=\"col\"></th>";
        cols.forEach(function(col: string) { newHtml += "<th scope=\"col\">" + col + "</th>"; });
        newHtml += "</tr>";
        newHtml += "</thead>";
        return newHtml;
    }

    function crearRows(cabecera: string, rows: Array<Array<string>>) {
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