export class List {
  constructor(data) {
    this.list = data.don.todos
    this.items = data.don.todos.items

  }

  //All of this data should be adapted correctly. the code on draw doesn't understand what this.temp is, even though it's imported and pathed right.
  get listTemplate() {
    return `<div>todo list<ul><li>${this.items}</li></ul></div>`
  }
}

//this entire file is either 100% wrong, or 100% ignored. I still haven't figured out which. I assume the latter over the former, it looks legit.