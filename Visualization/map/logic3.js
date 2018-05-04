// Store our API endpoint as queryUrl
var queryUrl = "http://68.171.31.94:8001/search/1/pw/ProJEct2/table/Clean_acc_drug_deaths/db/1";

// Create a new map
var myMap = L.map("map", {
    center: [
        41.55, -72.65
    ],
    zoom: 9.4
});
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, { id: 'mapbox.streets', maxZoom: 20, accessToken: accessToken });

myLayer.addTo(myMap);




// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {

    var heatArray = [];
    for (var i = 0; i < data.length; i++) {
        var latitude = data[i].Latitude;
        var longitude = data[i].Longitude;
        if (latitude) {
            heatArray.push([latitude, longitude, 20.0])
        }
    }
    console.log(heatArray);
    var heat = L.heatLayer(heatArray, {
        radius: 25,
    }).addTo(myMap)

});