import { addToDo } from "../models/toDoListModel";

export function addToDoController() {
    const createFormDialog = document.querySelector('#create-to-do');
    const closeButton = createFormDialog.querySelector('button[id="close"]');
    createFormDialog.showModal();

    closeButton.addEventListener('click', () => {
        createFormDialog.close(); 
    });

    const createForm = document.querySelector('#create-form');
    if (!createForm._submitListenerAdded) {
        createForm._submitListenerAdded = true;
    createForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = event.target.elements.category.value.trim();
        const status = event.target.elements.status.value.trim();
        const todo = event.target.elements.todo.value.trim();


        const addedToDo = { category, status, todo };

        addToDo(addedToDo); 
        createForm.reset(); 
    });
}
}