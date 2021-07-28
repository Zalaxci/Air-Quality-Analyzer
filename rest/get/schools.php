<?php

    require '../../db.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');

    $schools = $database->select('schools', [
        'sch_id',
        'sch_name',
        'sch_lat',
        'sch_long',
        'password'
    ], $_GET);

    print json_encode($schools);

?>