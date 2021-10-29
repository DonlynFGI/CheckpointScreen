import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/weather.js";
import { sandBoxApi } from "./AxiosService.js";

class weatherService {

  async getWeather() {
    const res = await sandBoxApi.get('weather')
    ProxyState.weather = res.data
    const template = weather.weatherTemplate
    // const weather = new Weather(ProxyState.weather)
  }
}

export const WeatherService = new weatherService()