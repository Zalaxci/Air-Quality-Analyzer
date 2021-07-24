renderDataToHTML(
    `http://lessons.idrogios.com/air-quality-analyzer/Air-Quality-Analyzer/Air-Quality-Analyzer/rest/get/metrics.php?sch_id=${getURLParameter('sch_id')}`,
    '.chart',
    function drawChart(canvas, schools) {
        let metrics = schools[0].metrics;
        new Chart(
            canvas,
            {
                type: 'line',
                data: {
                    labels: metrics.map(measurement => measurement.timestamp),
                    datasets: [{
                        ...canvas.dataset,
                        data: metrics.map(metric => metric[canvas.id]),
                    }],
                },
                options: {
                    maintainAspectRatio: false,
                },
            }
        );
    }
);