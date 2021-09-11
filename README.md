# Weather-Jornal-Udacity-project

it's a node js and express project that gets the temp by using zip code entered by the user and api key for openWeather apis

# tech used 
Node js
express
js
css
html


1.Start by setting up the project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and then include them in server.js file.
2.server created and running on the port localhost:8000
3.A console.log() is added to the server callback function, and tested.
4.A GET route is added and returns the projectData array in server code Then, A POST route is added that adds incoming data to projectData.
The POST route is receiving three pieces of data from the request body
    *temperature
    *date
    *user response

5.API credentials are Acquired from OpenWeatherMap website, and global variables at the top of the app.js code.
6.An async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
7.An event listener for the element with the id: generate, with a callback function to execute when it is clicked.
8.Inside that callback function async GET request with the parameters:-
  *base url
  *user entered zip code (see input in html with id zip)
  *personal API key- is Called
9.After successfuly retrieval of the weather data, a POST request is added to add the API data, as well as data entered by the user, to my app.

The function receives a path and a data object.
The data object includes
  *temperature
  *date
  *user response
  
Finally, another Promise that updates the UI dynamically is chained and another async function that is called after the completed POST request is written. This function retrieves data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:

  *Temperature
  *Date
  *User input
