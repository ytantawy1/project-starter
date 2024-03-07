import { toDoItemTemplate } from '../templates/toDoItem'
import {subscribe} from '../models/toDoListModel'
import { deleteToDoController } from '../controllers/deleteToDoController'

let view

export function toDoListView() {
    view = document.querySelector('#to-do-list')
    view.addEventListener('click', onHandleClick)

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

function onHandleClick(e) {
    switch (e.target.id) {
        case 'delete':
            deleteToDoController(e.target.dataset.uid)
            break
    }
}