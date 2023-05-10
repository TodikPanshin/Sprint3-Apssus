const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

import{NoteList} from"../cmps/note-list.jsx"

export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        noteService.query().then(setNotes)
    },[])

    function onRemoveNote(noteId) {
        bookService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
    })
    }

    return(
        <section className="note-index">
            <NoteList notes={notes} onRemoveNote={onRemoveNote}/>

        </section>
    ) 
}
