export class Weather {
  constructor(data) {
    this.temp = data.weather.main.temp
    this.pressure = data.weather.main.pressure
    this.humidity = data.weather.main.humidity
    this.windspeed = data.weather.wind.speed
    this.cast = data.weather.weather.description
  }

  //All of this data should be adapted correctly. the code on draw doesn't understand what this.temp is, even though it's imported and pathed right.
  get weatherTemplate() {
    return `<div class="card bg-light text-center" > Weather: temperature: ${this.temp} Pressure: ${this.pressure} humidity: ${this.humidity} WindSpeed: ${this.windspeed} Its ${this.cast} outside!</div>`
  }
}

//this entire file is either 100% wrong, or 100% ignored. I still haven't figured out which. I assume the latter over the former, it looks legit.