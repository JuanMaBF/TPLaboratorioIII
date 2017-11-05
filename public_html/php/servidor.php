<?php

    class grillaObject {
        public $cols = "";
        public $rows = "";
    }

    $action = $_POST["action"];
    switch($action) {
        case "cargarAutos":
            $grilla = new grillaObject;
            $grilla->cols = ["Patente", "Usuario", "Fecha"];
            $grilla->rows = [
                ["columna1a", "columna2a", "columna3a"],
                ["columna1b", "columna2b", "columna3b"],
                ["columna1c", "columna2c", "columna3c"],
                ["columna1d", "columna2d", "columna3d"],
                ["columna1e", "columna2e", "columna3e"],
                ["columna1f", "columna2f", "columna3f"]
            ];
            echo json_encode($grilla);
            break;
    }

?>