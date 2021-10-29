import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";

class quoteService {
  constructor() {
    // async getQuote() {
    //   const res = await sandBoxApi.get('quote')
    //   ProxyState.quote = res.data.results
    // }

  }
}

export const QuoteService = new quoteService()