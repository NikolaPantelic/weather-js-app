class Weather {
    constructor(city,state){
        this.apiKey = "9092d5d06914ed99e49a9a1a2eadb4ad";
        this.city = city;
        this.state = state;
    }
    // fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
        return await response.json();
    }
    // change weather location
    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
}