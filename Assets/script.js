const WeatherService = (function(){
    let self = this;
    const apiKey = "ec1ba683a42f5edeb068634d7fb5bc7a";
    WeatherService.prototype.fetchWeather = function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then((Response) => Response.json()).then((data) => displayWeather(data));
    }
    function displayWeather(data){
        console.log(data)
        let city = data.name;
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = "temp " + data.main.temp + " degrees f";
        let w = data.weather[0];
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${w.icon}@4x.png`;
        document.querySelector(".description").innerText = w.description;
        document.querySelector(".humidity").innerText = "humidtity " + data.main.humidity;
        document.querySelector(".wind").innerText = "wind " + data.wind.speed + " mph";
    }
});
window.WeatherService = new WeatherService();
document.getElementById('search').addEventListener("click", function(){
    window.WeatherService.fetchWeather(document.querySelector(".search-bar").value);
});
