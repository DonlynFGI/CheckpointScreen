export class Weather {
  constructor(data) {
    this.temp = Math.floor(data.main.temp * 1.8 - 459.67)
    this.tempcel = Math.floor(data.main.temp - 273.15)
    this.pressure = data.main.pressure
    this.humidity = data.main.humidity
    this.windspeed = data.wind.speed
    this.cast = data.weather[0].description
  }

  //All of this data should be adapted correctly. the code on draw doesn't understand what this.temp is, even though it's imported and pathed right.
  get weatherTemplate() {
    return `<div class="card bg-light text-center" id="wthr" onclick="app.WeatherController.toggleweather()" > Weather: temperature: ${this.temp}F Pressure: ${this.pressure} humidity: ${this.humidity} WindSpeed: ${this.windspeed} Its ${this.cast} outside!</div>`
  }


}


//this entire file is either 100% wrong, or 100% ignored. I still haven't figured out which. I assume the latter over the former, it looks legit.