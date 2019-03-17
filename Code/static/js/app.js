// from data.js
var tableData = data;

// select the submit button
var submit = d3.select("#filter-btn");

// select tbody tag in HTML
var tbody = d3.select("tbody");

data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});

submit.on("click", function() {

    // prevent refresh
    d3.event.preventDefault();

    // select input element and get html code
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value").toLowerCase();
    var stateValue = inputState.property("value").toLowerCase();
    var countryValue = inputCountry.property("value").toLowerCase();
    var shapeValue = inputShape.property("value").toLowerCase();

    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);
    console.log(tableData);

    var filteredData = tableData;

    // filter the data from the original table
    if (dateValue != "") {
        filteredData = filteredData.filter(tableData => tableData.datetime === dateValue);
    }
    if (cityValue != "") {
        filteredData = filteredData.filter(tableData => tableData.city === cityValue);
    }
    if (stateValue != "") {
        filteredData = filteredData.filter(tableData => tableData.state === stateValue);
    }
    if (countryValue != "") {
        filteredData = filteredData.filter(tableData => tableData.country === countryValue);
    }
    if (shapeValue != "") {
        filteredData = filteredData.filter(tableData => tableData.shape === shapeValue);
    }
    
    console.log(filteredData);

    d3.selectAll("td").remove();

    filteredData.forEach((UFO) => {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });
});
  