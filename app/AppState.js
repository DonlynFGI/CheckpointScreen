import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/weather').Weather} */
  weather = null
  weatherTemplate = ''
  /** @type {import('./Models/quotes').Quotes} */
  quotes = null
  quotesTemplate = ''
  listTemplate = ''
  /** @type {import('./Models/Image').Images} */
  images = null
  imagesTemplate = ''
  todos = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
