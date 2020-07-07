var apiKey = "d0012ec08e15e3ab1862fa45c49edc0f"
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var currentContainerEl = document.querySelector("#current-container");


var getCurrentWeather = function(city) {
    //format the weather api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d0012ec08e15e3ab1862fa45c49edc0f";

    //make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayCurrent(data);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    //get value from input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCurrentWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a City name");
    }
};

var displayCurrent = function(current) {
    //clear old content
    currentContainerEl.textContent = "";

    //format city name
    var cityName = current.name;

    //create a container for city name
    var nameEl = document.createElement("div");
    nameEl.classList = "list-item flex-flow justify-space-ebtween align-center";
    
    //create a span element to hold city name
    var citytitleEl = document.createElement("span");
    citytitleEl.textContent = cityName;

    //append name to container
    nameEl.appendChild(citytitleEl);

    //append container to the dom
    currentContainerEl.appendChild(nameEl);

    // format temperature
    var cityTemp = current.main.temp;

    //create container for temperature
    var tempEl = document.createElement("div");
    tempEl.classList = "list-item flex-flow justify-space-ebtween align-center";

    //create a span element to hold temp
    var tempTitleEl = document.createElement("span");
    tempTitleEl.textContent = cityTemp;

    //append temp to container
    tempEl.appendChild(tempTitleEl);

    //append container to the dom
    currentContainerEl.appendChild(tempEl);

    // format humidity
    var cityHumidity = current.main.humidity;

    //create container for humidity
    var humidityEl = document.createElement("div");
    humidityEl.classList = "list-item flex-flow justify-space-ebtween align-center";

    //create a span element to hold humidity
    var humidityTitleEl = document.createElement("span");
    humidityTitleEl.textContent = cityHumidity;

    //append humidity to container
    humidityEl.appendChild(humidityTitleEl);

    //append container to the dom
    currentContainerEl.appendChild(humidityEl);

    // format wind speed
    var cityWindSpeed = current.wind.speed;

    //create container for wind speed
    var windEl = document.createElement("div");
    windEl.classList = "list-item flex-flow justify-space-ebtween align-center";

    //create a span element to hold wind speed
    var windTitleEl = document.createElement("span");
    windTitleEl.textContent = cityWindSpeed;

    //append wind speed to container
    windEl.appendChild(windTitleEl);

    //append container to the dom
    currentContainerEl.appendChild(windEl);
}

userFormEl.addEventListener("submit", formSubmitHandler);