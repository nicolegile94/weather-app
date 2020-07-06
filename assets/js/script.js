var apiKey = "d0012ec08e15e3ab1862fa45c49edc0f"

var getCurrentWeather = function(city) {
    //format the weather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d0012ec08e15e3ab1862fa45c49edc0f";

    //make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getCurrentWeather("Madison");