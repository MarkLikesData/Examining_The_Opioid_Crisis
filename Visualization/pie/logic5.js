// Store our API endpoint as queryUrl
var queryUrl = "http://68.171.31.94:8001/search/1/pw/ProJEct2/table/Clean_acc_drug_deaths/db/1";


// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
  console.log(data);

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
    if (data[i].Race == 'Unknown')
      count4++;
  }

  var count5 = 0;
  for (var i = 0; i < data.length; ++i) {
    if (data[i].Race == 'Hispanic, Black')
      count5++;
  }

  // console.log(count1)
  // console.log(count2)
  // console.log(count3)
  // console.log(count4)
  // console.log(count5)

  var data = [{
    values: [count1, count2, count3, count4, count5],
    labels: ['White', 'Hispanic, White', 'Black', 'Unknown', 'Hispanic, Black'],
    type: 'pie'
  }];

  var layout = {
    title: 'Accidental Drug Overdose Death in Connecticut: 2012-2017',
    height: 336,
    width: 550
  };

  Plotly.newPlot('myPC', data, layout);
});