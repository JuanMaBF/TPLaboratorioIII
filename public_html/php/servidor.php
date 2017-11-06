<?php

    class grillaObject {
        public $cols = "";
        public $rows = "";
    }

    $grillaAutos = new grillaObject;
    $grillaAutos->cols = ["Patente", "Usuario", "Fecha", "Número de Operación"];
    $grillaAutos->rows = [
        ["columna1a", "columna2a", "columna3a", "1534534"],
        ["columna1b", "columna2b", "columna3b", "1342534"],
        ["columna1c", "columna2c", "columna3c", "1523452"],
        ["columna1d", "columna2d", "columna3d", "5234551"],
        ["columna1e", "columna2e", "columna3e", "4513453"],
        ["columna1f", "columna2f", "columna3f", "9675861"]
    ];



    $action = $_POST["action"];
    switch($action) {
        case "cargarAutos":
            echo json_encode($grillaAutos);
            break;
        case "eliminarAutos":
            $grillaNueva = eliminarDeGrilla($grillaAutos);
            echo json_encode($grillaNueva);
            break; 
        case "agregarAuto":
            $patente = $_POST["nuevo"];
            push_array($grillaAutos->rows, [$patente, "Cosme Fulanito", date('m/d/Y h:i:s a', time()), "1234567"]);
            echo $grillaAutos;
            break;
    }

    function eliminarDeGrilla($grilla) {
        $numeros = $_POST["numeros"];
        $grillaNueva = $grilla;
        for($i = 0; $i < count($grilla->rows); $i++){
            for($j = 0; $j < count($numeros); $j++){
                if(array_key_exists($i, $grilla->rows)){
                    if(in_array($numeros[$j], $grilla->rows[$i])){
                        unset($grillaNueva->rows[$i]);
                    }
                }
            }
        }
        $grillaNueva->rows = array_values($grillaNueva->rows);
        return $grillaNueva;
    }

?>