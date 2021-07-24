<?php

    require '../db.php';

    $data = $database->select('schools', [
        'sch_id',
        'sch_name',
        'sch_lat',
        'sch_long',
        'password'
    ], $_GET);

    print json_encode($data);

?>