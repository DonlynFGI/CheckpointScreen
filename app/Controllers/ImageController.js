import { ProxyState } from "../AppState.js";
import { Images } from "../Models/Image.js";
import { imageService } from "../Services/ImageService.js";


function _drawImage() {
  document.getElementById('img').style.backgroundImage = `url("${ProxyState.images}")`
  // document.getElementById('img').innerHTML = image.imagesTemplate
}
export class ImageController {
  constructor() {
    this.getImages()
    ProxyState.on('images', _drawImage)
  }
  async getImages() {
    try {
      await imageService.getImages()
    } catch (error) {
      console.error(error)
    }
  }

}