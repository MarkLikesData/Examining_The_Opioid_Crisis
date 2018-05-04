// Store our API endpoint as queryUrl
var queryUrl = "http://68.171.31.94:8001/search/1/pw/ProJEct2/table/Clean_acc_drug_deaths/db/1";


// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
  console.log(data);
  
  data.sort(function(a,b) {
    return parseFloat(b.greekSearchResults) -
      parseFloat(a.greekSearchResults);
  })
  
  data = data.slice(0, 10);
  data = data.reverse();
  console.log(data);


  // Trace1 for the Greek Data
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
  };
  
  // Trace 2 for the Roman Data
  var trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    type: "bar"
  };
  
  // Combining both traces
  var data = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "Greek vs Roman gods search results",
    barmode: "group",
    xaxis: {
      tickangle: -45
    },
    margin: {
      b: 130
    },
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);