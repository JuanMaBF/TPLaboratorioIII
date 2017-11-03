///<reference path="./grid-creator.ts"/>

function logout(){
    /* TODO: Proceso de deslogueo*/

    if(true) {
        window.location.href = "login.html";
    }
}

window.onload = function() {
    var columnasAutos = ["Patente", "Usuario", "Fecha"];
    var filas = [
        ["columna1a", "columna2a", "columna3a"],
        ["columna1b", "columna2b", "columna3b"],
        ["columna1c", "columna2c", "columna3c"],
        ["columna1d", "columna2d", "columna3d"],
        ["columna1e", "columna2e", "columna3e"],
        ["columna1f", "columna2f", "columna3f"]
    ]
    grildCreator.crearGrilla(columnasAutos, filas);
};