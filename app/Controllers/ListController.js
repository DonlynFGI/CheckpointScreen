import { ProxyState } from "../AppState.js";
import { ListService } from "../Services/ListService.js";

function _drawList(data) {
  let list = ProxyState.list
  const template = ProxyState.listTemplate
  //I know this logic looks weird as hell, and that's entirely because I've tried around nine different times to get it to pull the template and set it to the innerhtml of the page's item at id "weather". I've been taking wild guesses for the last three or four tries. Maybe I just don't understand mvc as well as I thought I did?
  document.getElementById('list').innerHTML = list.listTemplate
}
//I can't figure out why nothing is working, I have about an hour left to finish this entire app. FML
export class ListController {
  constructor() {
    this.getList()
    //One good thing that happened is that right here where I register a listener for anytime 'weather' changes, it actually does draw changes made. problem is, nothing ever really changes as it always comes back undefined. Definitely something to do with the template not being accepted. 
    ProxyState.on('todos', _drawList)
  }

  async getList() {
    try {
      await ListService.getList()
    } catch (error) {
      console.error(error)
    }

  }
}
//so like none of these have anything in them, because I ran out of time to work on this before I even got the weather working.