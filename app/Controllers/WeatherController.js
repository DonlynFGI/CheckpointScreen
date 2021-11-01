import { ProxyState } from "../AppState.js";
import { WeatherService } from "../Services/WeatherService.js";


function _drawWeather(data) {
  let weather = ProxyState.weather
  const template = ProxyState.weatherTemplate
  //I know this logic looks weird as hell, and that's entirely because I've tried around nine different times to get it to pull the template and set it to the innerhtml of the page's item at id "weather". I've been taking wild guesses for the last three or four tries. Maybe I just don't understand mvc as well as I thought I did?
  document.getElementById('weather').innerHTML = weather.weatherTemplate
}
//I can't figure out why nothing is working, I have about an hour left to finish this entire app. FML
export class WeatherController {
  constructor() {
    this.getWeather()
    //One good thing that happened is that right here where I register a listener for anytime 'weather' changes, it actually does draw changes made. problem is, nothing ever really changes as it always comes back undefined. Definitely something to do with the template not being accepted. 
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

function toggleweather() {
  document.getElementById('wthr').innerText = `Temperature: ${this.tempcel}`
}