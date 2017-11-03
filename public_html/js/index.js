var registros = {};

function logout(){
    /* TODO: Proceso de deslogueo*/

    if(true) {
        window.location.href = "login.html";
    }
}

function crearGrilla(cols, rows) {
    var cabecera = crearCabecera(cols);
    crearRows(cabecera, rows);
}

function crearCabecera(cols){
    let newHtml = "";

    newHtml += "<thead class=\"thead-dark\">";
    newHtml += "<tr>";
    newHtml += "<th scope=\"col\"></th>";
    cols.forEach(function(col) { newHtml += "<th scope=\"col\">" + col + "</th>"; });
    newHtml += "</tr>";
    newHtml += "</thead>";
    return newHtml;
}

function crearRows(cabecera, rows) {
    var newHtml = cabecera;
    newHtml += "<tbody>";
    newHtml += "<tr>";
    newHtml += "<th scope=\"row\"><input type=\"checkbox\" id=\"checkbox1\"></th>";
}


window.onload = function() {
    var columnasAutos = ["Patente", "Usuario", "Fecha"];

    crearGrilla(columnasAutos);
};

/*
<tbody>
    <tr>
        <th scope="row"><input type="checkbox" id="checkbox1"></th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
</tbody>
*/