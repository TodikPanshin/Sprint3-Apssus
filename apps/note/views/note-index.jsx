const { useEffect, useState } = React
const { Link, useSearchParams } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

import{NoteList} from '../cmps/note-list.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    },[])

function loadNotes(){
    noteService.query().then(setNotes)
}

    function onRemoveNote(noteId) {
        bookService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
    })
    }
console.log(notes)
    return(
        <section className="note-index">
            {/* <NoteList notes={notes}/> */}
        </section>
    ) 
}
