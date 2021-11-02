import { ProxyState } from "../AppState.js";
import { ListService } from "../Services/ListService.js";

function _drawList(data) {
  let list = ProxyState.todos
  let CompletedTodos = list.filter(l => l.completed).length
  let template = `<div>${CompletedTodos}/${list.length}</div>`
  list.forEach(todo => template += `<p><input id="completed" onclick="app.listController.completed('${todo.id}')" type="checkbox"${todo.completed ? 'checked' : ''}>${todo.description}</p><button onclick="app.listController.deleteTodo('${todo.id}')">Del</button>`)
  document.getElementById('listitems').innerHTML = template
  list.forEach(l => template += `
  <p class="m-1 selectable" onclick="app.listController.completed('${l.id}')">
    ${l.name} ${l.completed ? '<i class="text-info mdi mdi-book"></i>' : ''}
  </p>
  `)
}
export class ListController {
  constructor() {
    this.getList()
    ProxyState.on('todos', _drawList)
  }

  async create() {
    window.event.preventDefault()
    const formElem = window.event.target
    const listData = {
      description: formElem.currentlist.value,
    }
    await ListService.create(listData)
  }
  async getList() {
    try {
      await ListService.getList()
    } catch (error) {
      console.error(error)
    }

  }

  async completed(id) {
    try {
      await ListService.complete(id)

    } catch (error) {
      console.error(error)
    }
  }

  async deleteTodo(id) {
    try {
      if (window.confirm('Are you sure you want to delete this?')) {
        window.event.preventDefault()
        await ListService.deleteTodo(id)
      }
    } catch (error) {
      console.error("[DELETE ERROR]", error.message)
    }
  }
}


