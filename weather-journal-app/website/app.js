/* Global Variables */
// base url is holding the url and the query string 
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// API KEY
const key = '810923476e78f030a2fdf4ba2c5eb1d5';
// Unit Constant
const units = 'imperial'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() +1) + '.' + d.getDate() + '.' + d.getFullYear();

// Async GET data from api
const retrieveData = async (url = '', Apikey,unit) => {
    const request = await fetch(url + '&appid=' + Apikey +'&units=' + unit);
    try {
        debugger;
        // Transform into JSON
        const allData = await request.json();
        return allData;
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

// Async POST
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

//Get openWeather api data
function getJornalData() {
    debugger;
    // Get user zip code b=using the input id
    var zip = document.getElementById('zip').value;

    if (zip != undefined & zip != '') {
        // Get data from openWeathered api using the baseUrl, zip code, and the key
        retrieveData(baseUrl + zip, key,units).then(function (allData) {
            debugger;
            // extract needed data from the response
            var temp = allData.main.temp;
            // get user feelings from the input data
            var feelings = document.getElementById('feelings').value;
            // post the data through the postData function to the server
            postData('/addState', { temperature: temp, date: newDate, userResponse: feelings });

            updatUi();
        });
    }
}

// Update ui using the data saved to ProjectData array

const updatUi = async () => {
    var request = await fetch('/all');
    try {
        const data = await request.json();
        var i = data.length;
        document.getElementById('date').innerHTML = 'Date: ' + data[i - 1].date
        document.getElementById('temp').innerHTML = 'temperature: ' + data[i - 1].temperature
        document.getElementById('content').innerHTML = 'feeleings: ' + data[i - 1].userResponse
    } catch (error) {
        console.log("error", error);
    }
}

// add event listener to the generate button
document.getElementById('generate').addEventListener('click', getJornalData);
