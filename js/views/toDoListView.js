import { toDoItemTemplate } from '../templates/toDoItem'
import {subscribe} from '../models/toDoListModel'

let view

export function toDoListView() {
    view = document.querySelector('#to-do-list')
    //render()
}

subscribe(render)
function render(data) {
    const div = document.createElement('div');
    const toDoList = document.querySelector('#item-container');
    toDoList.replaceChildren();
    data.forEach((item) => {
        div.prepend(toDoItemTemplate(item))
    })
    toDoList.append(div);
}