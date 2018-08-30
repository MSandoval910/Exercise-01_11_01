/*  Exercise 01_11_01

    Whole Spectrum Energy Solutions
    Author: Mario Sandoval
    Date:  08/28/2018 

    Filename: script.js
*/

"use strict";
// global variables
var selectedCity = "Tucson, AZ"; // default locations
var weatherReport = null;
// var to hold our XHR object 
var httpRequest = false;

// function to get a request object 
function getRequestObject() {
    // instantiate an XHR object 
    try {
        httpRequest = new XMLHttpRequest();
    } catch (errorMessage) {
        document.querySelector("p.error").innerHTML = "Forecast not supported by your browser";
        document.querySelector("p.error").style.display = "block";
        return false;
    }
   return httpRequest;
}

// get the weather in response too the click events on the city locations
// and for default city on page load
function getWeather(evt) {
    var latitude;
    var longitude;
    if (evt.type !== "load") {
        if (evt.target) {
            selectedCity = evt.target.innerHTML;
        } else if (evt.srcElement) {
            selectedCity = evt.srcElement.innerHTML;
        }
    }
    if (selectedCity === "Tucson, AZ") {
        latitude = 37.7577;
        longitude = -122.4376;
    } else if (selectedCity === "Chicago, IL") {
        latitude = 41.8337329;
        longitude = -87.7321555;
    } else if (selectedCity === "Montreal, QC") {
        latitude = 45.5601062;
        longitude = -73.7120832;
    }
    // test for XHR object 
    if (!httpRequest) {
        httpRequest = getRequestObject();
        
    }
    // protect against open request 
    httpRequest.abort();
    // target request 
    httpRequest.open("get", "solar.php?" + "lat=" + latitude + "&lng=" + longitude, true);
    httpRequest.send(null);
}
//retrieve li elements holding city location choices
var locations = document.querySelectorAll("section ul li");
// add click event listeners too all city location elements
// event handler will be getWeather
for (var i = 0; i < locations.length; i++) {
    if (locations[i].addEventListener) {
        locations[i].addEventListener("click", getWeather, false);
    } else if (locations[i].attachEvent) {
        locations[i].attachEvent("onclick", getWeather);
    }
}
// add load event listener to get weather for 
// default location event handler getweather  
if (window.addEventListener) {
    window.addEventListener("load", getWeather, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", getWeather);
}
