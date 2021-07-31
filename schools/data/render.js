import { renderMap } from '../components/map.js';
import { setChartColor, drawChart } from '../components/chart.js';

async function renderData(url) {
    let response = await fetch(url);
    let data = await response.json();
    setChartColor('#fff');
    forElement('.map', renderMap, await data);
    forElement('.chart', drawChart, await data);
}
renderData('http://lessons.idrogios.com/air-quality-analyzer/Air-Quality-Analyzer/Air-Quality-Analyzer/rest/get/schools.php');