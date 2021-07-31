import Chart from '../../node_modules/chart.js/dist/chart.js';

export function setChartColor(color) {
    Chart.defaults.global.defaultFontColor = color;
    Chart.defaults.color = color;
}
export function drawChart(canvas, schools) {
    let metrics = schools.map(school => school.metrics).flat();
    new Chart(
        canvas,
        {
            type: 'line',
            data: {
                labels: metrics.map(metric => metric.timestamp),
                datasets: schools.map(school => {
                    let label = school.sch_name;
                    let [ red, green, blue ] = [ 200 / school.sch_id, 50 * school.sch_id, 255 ];
                    let borderColor = `rgb(${red}, ${green}, ${blue})`;
                    let data = school.metrics.map(metric => metric[canvas.id]);
                    return { label, borderColor, data };
                }),
            },
            options: {
                maintainAspectRatio: false,
            },
        }
    );
}