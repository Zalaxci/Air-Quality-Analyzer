<?php

    require 'vendor/autoload.php';
    use Medoo\Medoo;

    $db_config = json_decode(file_get_contents("http://localhost/air-quality-analyzer/Air-Quality-Analyzer/Air-Quality-Analyzer/db.json"), true);
    $database = new Medoo($db_config);

?>