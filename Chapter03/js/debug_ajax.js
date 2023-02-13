function debugCallback(response){
	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

function debugAjax(){
	
	var myData;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			debugCallback(response);
		})

	document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};

document.querySelector("#myDiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))


// code from ch 3 -- removed and replaced w debug_ajax

function jsAjax() {
    //define a variable to hold the data
    var myData;

    //use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function (response) {
            return response.json();
        })
        .then(function(response){
            myData = response;

            //check the data- accessed
            console.log(myData)
        }) 

    //check the data- cannot access
    console.log(myData)
};
//removed at ex 3.6
       //.then(callback)
//};


//define callback function
function callback(response) {
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();
