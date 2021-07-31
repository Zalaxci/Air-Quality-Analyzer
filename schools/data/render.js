async function renderData(url) {
    let response = await fetch(url);
    let data = await response.json();
    forElement('.chart', drawChart, await data);
    forElement('.map', renderMap, await data);
}
renderData('http://lessons.idrogios.com/air-quality-analyzer/Air-Quality-Analyzer/Air-Quality-Analyzer/rest/get/schools.php');