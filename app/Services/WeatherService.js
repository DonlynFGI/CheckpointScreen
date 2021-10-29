import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/weather.js";
import { sandBoxApi } from "./AxiosService.js";

class weatherService {

  async getWeather() {
    const res = await sandBoxApi.get('weather')
    ProxyState.weather = res.data
    const template = ProxyState.weather.weatherTemplate
    //I've tried so many different things to get this damn template on the page, I've completely run out of ideas. 
    // const weather = new Weather(ProxyState.weather)
  }
}

export const WeatherService = new weatherService()