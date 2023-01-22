import { db } from "../../firebase/firebaseConfig"
import { collection, getDocs } from 'firebase/firestore'

//    /TXP5k55ErwMVkFSLj6h2m8a6fDl2/journal/notes

export const loadNotes = async (uid) => {

    const notesSnap =  await getDocs(collection(db, `${uid}/journal/notes`))
    //console.log(notesSnap)
    const notes = [];

    notesSnap.forEach( snapHijo => {
        // console.log(snapHijo.data());
        notes.push({
            id: snapHijo.id, ...snapHijo.data()
        })
    })
    // console.log(notes)
    return notes; 

}
