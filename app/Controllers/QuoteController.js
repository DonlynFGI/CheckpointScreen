import { ProxyState } from "../AppState.js";
import { QuoteService } from "../Services/QuoteService.js";


function _drawQuote(data) {
  let quotes = ProxyState.quotes
  const template = ProxyState.quotesTemplate
  document.getElementById('quote').innerHTML = quotes.quotesTemplate

}
export class QuoteController {
  constructor() {
    this.getQuote()
    ProxyState.on('quotes', _drawQuote)
  }

  async getQuote() {
    try {
      await QuoteService.getQuote()
    } catch (error) {
      console.error(error)
    }

  }
}