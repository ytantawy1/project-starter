import { ref, set, get, push, child, remove, update } from 'firebase/database';
import { db } from '../lib/firebase/config/firebase/firebaseInit';
import { createStore, RemoveFromStore, updateStore, addToStore } from './store';

let observers = [];

export function subscribe(fn) {
    observers.push(fn);
}

export function notify(data) {
    observers.forEach((observer) => observer(data));
}

export async function getToDoData() {
    const dbRef = ref(db, 'todos');
    const response = await get(dbRef);
    let payload = await response.val();
    payload = Object.entries(payload);
    let toDoItems = payload.map((item) => {
        return { ...item[1], uid: item[0] };
    });
    if (await createStore(toDoItems)) {
        notify(toDoItems);
    }
}

export function deleteToDo(uid) {
    const dbRef = ref(db, `todos/${uid}`);
    remove(dbRef);
    const store = RemoveFromStore(uid);
    notify(store);
}

export function updateToDo(updatedToDo) {
    let payload = updatedToDo;
    const dbRef = ref(db, `todos/${payload.uid}`);
    update(dbRef, payload);
    const store = updateStore(payload);
    notify(store);
}



export async function addToDo(addedToDo) {
    const dbRef = ref(db, `todos`)
    const addedToDoRef = push(dbRef)

    await set(addedToDoRef, addedToDo)
    addedToDo.uid = addedToDoRef.key
    const store = addToStore(addedToDo)

    notify(store)
}