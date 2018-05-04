// Store our API endpoint as queryUrl
var queryUrl = "http://68.171.31.94:8001/search/1/pw/ProJEct2/table/Clean_acc_drug_deaths/db/1";


// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
console.log(data)
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
  var data = [trace1, trace2, trace3, trace4, trace5];

  var layout = {
    title: 'Accidental Drug Overdose Deaths in Connecticut',
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

  Plotly.newPlot('myLC', data, layout);

});