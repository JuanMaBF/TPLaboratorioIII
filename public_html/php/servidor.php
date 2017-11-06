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
                ["1", "columna1a", "columna2a", "columna3a"],
                ["1", "columna1b", "columna2b", "columna3b"],
                ["1", "columna1c", "columna2c", "columna3c"],
                ["1", "columna1d", "columna2d", "columna3d"],
                ["1", "columna1e", "columna2e", "columna3e"],
                ["1", "columna1f", "columna2f", "columna3f"]
            ];
            echo json_encode($grilla);
            break;
        case "otro":
            break;
    }

?>