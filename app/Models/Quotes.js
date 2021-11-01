export class Quotes {
  constructor(data) {
    this.quotes = data.content
    this.maker = data.author

  }

  //All of this data should be adapted correctly. the code on draw doesn't understand what this.temp is, even though it's imported and pathed right.
  get quotesTemplate() {
    return `<div class="card bg-light text-center hoverdiv" >${this.quotes}</div>
    <div class="hide">${this.maker}</div>
    `
  }
}

//this entire file is either 100% wrong, or 100% ignored. I still haven't figured out which. I assume the latter over the former, it looks legit.