var registros = {};

function logout(){
    /* TODO: Proceso de deslogueo*/

    if(true) {
        window.location.href = "login.html";
    }
}

/*function agregarAuto() {
   var currentHtml = $("#grilla").html();

    currentHtml +=

}*/

function crearGrilla(cols){
    console.log("pito");
    var grilla = $("#grilla");
    var newHtml = "";
    grilla.html("");

    newHtml += "<thead class=\"thead-dark\">";
    newHtml += "<tr>";
    newHtml += "<th scope=\"col\"></th>";

    cols.forEach(function(col) {
        newHtml += "<th scope=\"col\">" + col + "</th>";
    });

    newHtml += "</tr>";
    newHtml = "</thead>";
}

crearGrilla(columnasAutos);


var columnasAutos = ["Patente", "Usuario", "Fecha"];

/*
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Patente</th>
            <th scope="col">Usuario</th>
            <th scope="col">Fecha</th>
        </tr>
    </thead>
*/