import {ref, child, get} from "firebase/database";

import {db} from "./../../config/firebase/firebaseInit";

const dbRef = ref(db, "/todos")
const dataSnapshot = await get(dbRef);
const data = await dataSnapshot.val()

async function getToDoData(){
    const dbRef = ref(db, "/todos")
const dataSnapshot = await get(dbRef);
return await dataSnapshot.val()
}

export {getToDoData}