<?php

    require '../../db.php';

    $schools = $database->select('schools', [
        'sch_id',
        'sch_name'
    ], $_GET);

    foreach ($schools as &$school) {
        $school['metrics'] = $database->select('metrics', [
            'm_id',
            'sch_name'
        ], [
            'sch_id' => $school['sch_id']
        ]);
    }

    print json_encode($schools);

?>