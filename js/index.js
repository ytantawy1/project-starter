import { getToDoData } from "./lib/firebase/api";

// single source of truth for the data...
let store = [];
async function appInit() {
    const toDos = await getToDoData();
    console.log(toDos);
}

appInit();


