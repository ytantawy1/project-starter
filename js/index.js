import { getToDoData } from "./lib/firebase/api";
import { toDoItemTemplate } from "./templates/toDoItem";

/* 
           
			  
*/

async function appInit() {
	const appData = await getToDoData();
    const toDoItems = Object.values(appData).map((obj) => {
        return toDoItemTemplate(obj.todo);
    });

    /* toDoItems.forEach((todo) => {
        document.querySelector('#root').insertAdjacentHTML('afterbegin', todo);
}); */

     const div = document.createElement('div');
     toDoItems.forEach((markup)=>{
        div.appendChild(markup);
     });
     document.querySelector('main').append(div);
}

appInit();
