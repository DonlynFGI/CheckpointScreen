import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ListController } from "./Controllers/ListController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { ClockController } from "./Controllers/ClockController.js";

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController();
  quoteController = new QuoteController();
  listController = new ListController();
  imageController = new ImageController();
  clockController = new ClockController()
}

window["app"] = new App();
