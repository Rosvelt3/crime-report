//Inicializar mapa
let map = L.map('map').setView([18.898414, -71.230431], 8)

//COnseguir un mapa de internet 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    minZoom: 8,
    accessToken: 'pk.eyJ1IjoiaXNhaWFzMDA1IiwiYSI6ImNqdWFsZmgxNDAzd3I0M255eDBwcTgyancifQ.EVXLihnAyv4ftca1FLgSHg'
}).addTo(map);

//Ejecutar esta funcion cuando la pantalla cargue
window.addEventListener("load", () => {
    //Conseguir todos los reportes ya guardados
    const reports = JSON.parse(localStorage.getItem("reports"))
    if (reports) {
        //Por cada reporte que exista agregar marcador a mapa y agregarle a este marcador informacion sobre el crimen
        reports.forEach(report => {
            let marker = L.marker([parseFloat(report.latitude), parseFloat(report.longitude)]).addTo(map)
            marker.bindPopup(`<b>${report.title}</b><br>${report.description}`)
        })
    } else {
        alert("No hay reportes")
    }
})