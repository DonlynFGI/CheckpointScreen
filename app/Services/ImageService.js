import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";

class ImageService {
  async getImages() {
    const res = await sandBoxApi.get('images')
    ProxyState.images = res.data.imgUrl
    console.log(ProxyState.imgUrl)
  }
}


export const imageService = new ImageService()

//I really tried, I swear. I'm basically taking the L at this point, life just didn't pan out right for me this time around.