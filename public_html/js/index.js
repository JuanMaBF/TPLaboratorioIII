var registros = {};

function logout(){
    /* TODO: Proceso de deslogueo*/

    if(true) {
        window.location.href = "login.html";
    }
}

function crearGrilla(cols, rows) {
    var cabecera = crearCabecera(cols);
    let newHtml = crearRows(cabecera, rows);
    $("#grilla").html(newHtml);
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
    console.log(newHtml);
    return newHtml;
}


window.onload = function() {
    console.log("fsadfas");
    var columnasAutos = ["Patente", "Usuario", "Fecha"];
    var filas = [
        ["columna1a", "columna2a", "columna3a"],
        ["columna1b", "columna2b", "columna3b"],
        ["columna1c", "columna2c", "columna3c"],
        ["columna1d", "columna2d", "columna3d"],
        ["columna1e", "columna2e", "columna3e"],
        ["columna1f", "columna2f", "columna3f"]
    ]
    crearGrilla(columnasAutos, filas);
};