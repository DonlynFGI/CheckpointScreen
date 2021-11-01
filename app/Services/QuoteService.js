import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";
import { Quotes } from "../Models/Quotes.js"

class quoteService {

  async getQuote() {
    const res = await sandBoxApi.get('quotes')
    ProxyState.quotes = new Quotes(res.data)
    const template = ProxyState.quotes.quotesTemplate
  }

}

export const QuoteService = new quoteService()