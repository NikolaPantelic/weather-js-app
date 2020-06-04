class Ui {
    constructor() {
        this.location = document.getElementById("w-location");
        this.description = document.getElementById("w-desc");
        this.temperature = document.getElementById("w-temp");
        this.humidity = document.getElementById("w-humidity");
        this.maxtemperature = document.getElementById("w-tempmax");
        this.mintemperature = document.getElementById("w-tempmin");
        this.feelslike = document.getElementById("w-feelslike");
        this.windspeed = document.getElementById("w-wind");
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.temperature.textContent = `Temperature : ${weather.main.temp.toFixed()} °C`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.maxtemperature.textContent = `Max Temp : ${weather.main.temp_max.toFixed()} °C`;
        this.mintemperature.textContent = `Min Temp : ${weather.main.temp_min.toFixed()} °C`;
        this.feelslike.textContent = `Feels Like : ${weather.main.feels_like.toFixed()} °C`;
        this.windspeed.textContent = `Wind speed : ${weather.wind.speed} m/s`;
    }
}