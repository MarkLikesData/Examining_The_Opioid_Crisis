// THIS IS A COMBINATION OF THE LOGIC FILES

// Store our API endpoint as queryUrl
var queryUrl = "http://68.171.31.94:8001/search/1/pw/ProJEct2/table/Clean_acc_drug_deaths/db/1";

// THIS WAS ORIGINALLY LOGIC3 FOR THE MAP-----------------------------------
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
    console.log(data);
    console.log(heatArray);
    var heat = L.heatLayer(heatArray, {
        radius: 25,
    }).addTo(myMap)

// THIS WAS ORIGINALLY LOGIC5 FOR THE PIE CHART--------------------------------

    var count1 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Race == 'White')
        count1++;
    }

    var count2 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Race == 'Hispanic, White')
        count2++;
    }

    var count3 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Race == 'Black')
        count3++;
    }

    var count4 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Race == 'Nan')
        count4++;
    }

    var count5 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Race == 'Hispanic, Black')
        count5++;
    }

    console.log(count1)
    console.log(count2)
    console.log(count3)
    console.log(count4)
    console.log(count5)

    var piedata = [{
        values: [count1, count2, count3, count4, count5],
        labels: ['White', 'Hispanic, White', 'Black', 'Unknown', 'Hispanic, Black'],
        type: 'pie'
    }];

    var layout = {
        title: 'Accidental Drug Overdose Death in Connecticut: 2012-2017',
        height: 336,
        width: 550
    };

    Plotly.newPlot('myPC', piedata, layout);

// THIS WAS ORIGINALLY LOGIC4 FOR THE LINE CHART----------------------------------
    var lineChart = [];
    cocaine = [0,0,0,0,0,0];
    heroin = [0,0,0,0,0,0];
    fentanyl = [0,0,0,0,0,0];
    oxycodone = [0,0,0,0,0,0];
    oxymorphone = [0,0,0,0,0,0];
    for (var i = 0; i < data.length; i++) {
    let dataIndex = 0;
    var date = data[i].Date.slice(0,4);
    //todo: slice date to 2017, etc
    if (date === '2017') {
        dataIndex = 5;
    } else if (date === '2016') {
        dataIndex = 4;
    } else if (date === '2015') {
        dataIndex = 3;
    } else if (date === '2014') {
        dataIndex = 2;
    } else if (date === '2013') {
        dataIndex = 1;
    } else if (date === '2012') {
        dataIndex = 0;
    } else {
        console.log('oops!');
    }
    
    if (data[i].Heroin === "Y") {
        heroin[dataIndex] = heroin[dataIndex] + 1;
    }
    if (data[i].Cocaine === "Y") {
        cocaine[dataIndex] = cocaine[dataIndex] + 1;
    }
    if (data[i].Fentanyl === "Y") {
        fentanyl[dataIndex] = fentanyl[dataIndex] + 1;
    }
    if (data[i].Oxycodone === "Y") {
        oxycodone[dataIndex] = oxycodone[dataIndex] + 1;
    }
    if (data[i].Oxymorphone === "Y") {
        oxymorphone[dataIndex] = oxymorphone[dataIndex] + 1;
    }
    }

    var trace1 = {
    x: [2012,2013,2014,2015,2016,2017],
    y: oxycodone,
    type: 'scatter',
    name: 'Oxycodone'
    };
    var trace2 = {
    x: [2012,2013,2014,2015,2016,2017],
    y: fentanyl,
    type: 'scatter',
    name: 'Fentanyl'
    };
    var trace3 = {
    x: [2012,2013,2014,2015,2016,2017],
    y: heroin,
    type: 'scatter',
    name: 'Heroin'
    };
    var trace4 = {
    x: [2012,2013,2014,2015,2016,2017],
    y: cocaine,
    type: 'scatter',
    name: 'Cocaine'
    };
    var trace5 = {
    x: [2012,2013,2014,2015,2016,2017],
    y: oxymorphone,
    type: 'scatter',
    name: 'Oxymorphone'
    };
    var linedata = [trace1, trace2, trace3, trace4, trace5];

    var layout = {
    title: 'Accidental Drug Overdose Deaths in Connecticut',
    height: 336,
    width: 550,
    xaxis: {
        title: 'Years',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'Accidental OD Deaths',
        showline: false
    }
    };

    Plotly.newPlot('myLC', linedata, layout);


    


    // THIS WAS ORIGINALLY LOGIC6 FOR THE BAR CHART----------------------------------

    var count1 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 20 && data[i].Age < 30)
            count1++;
    }

    var count2 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 30 && data[i].Age < 40)
            count2++;
    }

    var count3 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 40 && data[i].Age < 50)
            count3++;
    }

    var count4 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 50 && data[i].Age < 60)
            count4++;
    }

    var count5 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 60 && data[i].Age < 70)
            count5++;
    }

    var count6 = 0;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].Age > 70 && data[i].Age < 90)
            count6++;
    }


    var barData = [count1, count2, count3, count4, count5, count6];

    console.log(barData)

    var barData = [{
        x: ['20 to 30', '30 to 40', '40 to 50', '50 to 60', '60 to 70', '70 to 90'],
        y: barData,
        type: 'bar'
    }];

    var layout = {
        title: 'Accidental Drug Overdose Death in Connecticut: 2012-2017',
        height: 338,
        width: 825,
      };

    Plotly.newPlot('myBC', barData, layout);

});