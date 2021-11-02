import { ProxyState } from "../AppState.js";
import { List } from "../Models/list.js";
import { sandBoxApi } from "./AxiosService.js";

class listService {
  async create(listData) {
    const res = await sandBoxApi.post('Don/todos', listData)
    console.log(res.data)
    const list = new List(res.data)
    ProxyState.todos = [...ProxyState.todos, list]
  }
  async getList() {
    const res = await sandBoxApi.get('Don/todos')
    ProxyState.todos = (res.data.map(l => new List(l)))
    console.log(ProxyState.todos)
  }
  async complete(id) {
    console.log(id)
    const todo = ProxyState.todos.find(l => l.id == id)
    // REVIEW the ! symbol changes true to false and false to true
    todo.completed = !todo.completed
    const res = await sandBoxApi.put(`Don/todos/${todo.id}`, todo)
    ProxyState.todos = ProxyState.todos
  }

  async deleteTodo(id) {
    const todo = ProxyState.list.find(l => l.id == id)
    await sandBoxApi.delete('Don/todos/' + `${todo.id}`)
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id != id)
  }

}


export const ListService = new listService()