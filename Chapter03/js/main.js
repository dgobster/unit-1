//initialize function called when the script loads
function initialize() {
    cities();
    debugAjax();
};

//function to create a table with cities and their populations
function cities() {

    //define two arrays for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];
    //create the table element
    var table = document.createElement("table");

    //create a header row 
    var headerRow = document.createElement("tr");
    //add the row to the table
    table.appendChild(headerRow);
    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")


    //loop to add a new row for each city
    cityPop.forEach(function (cityObject) {
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend', rowHtml);
    })

    //append the table element to the div
    document.querySelector("#myDiv").appendChild(table);

    addColumns(cityPop);
    addEvents();
};

//function to add column for city sizes
function addColumns(cityPop) {
    //select all rows for column
    var rows = document.querySelectorAll("tr")
    //loop to add column for each row
    document.querySelectorAll("tr").forEach(function (row, i) {

        //add header to first row in table    
        if (i == 0) {
            //header
            newHeader = document.createElement('th');
            newHeader.innerHTML = 'City Size';
            //append header element to table
            row.appendChild(newHeader)

        } else {


            var citySize;

            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';

            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };

            //new cell for city size
            var newRow = document.createElement('td')
            newRow.innerHTML = citySize
            //append city size cell to table
            row.appendChild(newRow)
        };
    })
};

//function adding event listeners for mouse
function addEvents() {

    //select the table element
    table = document.querySelector("table");

    //add mouseover event
    document.querySelector("table").addEventListener("mouseover", function () {
        //add random color for mouseover event
        var color = "rgb(";
        //generate random color
        for (var i = 0; i < 3; i++) {
            var random = Math.round(Math.random() * 255);

            color += random;
            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            };
        };
        //style table with random generated color
        document.querySelector("table").style.color = color;
    });

    //click effect function
    function clickme() {
        alert('Hey, you clicked me!');
    };

    //event listener for click
    table.addEventListener("click", clickme)
};

//function to define fetch request
function debugAjax() {
    //define a variable to hold the data
    var myData;
  
    //use fetch to retrieve data
    fetch("data/MegaCities.geojson")
        .then(function (response) {
            return response.json();
            myData = response;
        })//convert data to usable form

        //send retrieved data to callback funciton
        .then(debugCallback)
    };

//define callback function
function debugCallback(myData){
    //tasks using data go here-- print data to page, with header
    document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
    }

//call the initialize function when the DOM has loaded
document.addEventListener('DOMContentLoaded', initialize);