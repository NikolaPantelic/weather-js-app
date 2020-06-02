// init weather object

const weather = new Weather("Poznan", "Poland");

// init UI object

const ui = new Ui();

// get weather on DOM load

document.addEventListener("DOMContentLoaded", getWeather);

// change location event

document.getElementById("w-change-btn").addEventListener("click", function (e) {
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    // change location

    weather.changeLocation(city, state);

    // get and display weather

    getWeather();

    // hiding of modal

    $("#locModal").modal("hide");
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => {
            console.log(err);
        })
}