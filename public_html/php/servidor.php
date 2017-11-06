<?php

    class grillaObject {
        public $cols = "";
        public $rows = "";
    }

    $action = $_POST["action"];
    switch($action) {
        case "cargarAutos":
            $grilla = new grillaObject;
            $grilla->cols = ["Patente", "Usuario", "Fecha", "Número de Operación"];
            $grilla->rows = [
                ["columna1a", "columna2a", "columna3a", "1534534"],
                ["columna1b", "columna2b", "columna3b", "1342534"],
                ["columna1c", "columna2c", "columna3c", "1523452"],
                ["columna1d", "columna2d", "columna3d", "5234551"],
                ["columna1e", "columna2e", "columna3e", "4513453"],
                ["columna1f", "columna2f", "columna3f", "9675861"]
            ];
            echo json_encode($grilla);
            break;
        case "otro":
            break; 
    }

?>