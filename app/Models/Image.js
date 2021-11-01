export class Images {
  constructor(data) {
    this.url = data.imgUrl

  }

  //All of this data should be adapted correctly. the code on draw doesn't understand what this.temp is, even though it's imported and pathed right.
  get imagesTemplate() {
    return `<img src="${this.url}" alt>`
  }
}
