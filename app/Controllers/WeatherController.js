import { ProxyState } from "../AppState.js";
import { WeatherService } from "../Services/WeatherService.js";


function _drawWeather(data) {
  let weather = ProxyState.weather
  document.getElementById('weather').innerHTML = data.weather.weatherTemplate
}
//I can't figure out why nothing is working, I have about an hour left to finish this entire app. FML
export class WeatherController {
  constructor() {
    this.getWeather()
    ProxyState.on('weather', _drawWeather)
  }

  async getWeather() {
    try {
      await WeatherService.getWeather()
    } catch (error) {
      console.error(error)
    }

  }
}