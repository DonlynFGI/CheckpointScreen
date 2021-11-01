import { ProxyState } from "../AppState.js";
import { List } from "../Models/list.js";
import { sandBoxApi } from "./AxiosService.js";

class listService {
  async getList() {
    const res = await sandBoxApi.get('don/todos')
    ProxyState.list = new List(res.data)
    const template = ProxyState.list.listTemplate
  }
}
function addListItem() {

}


export const ListService = new listService()