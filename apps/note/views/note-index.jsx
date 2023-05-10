const { useEffect, useState } = React
const { Link, useSearchParams } = ReactRouterDOM

import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"



export function NoteIndex() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    },[])

function loadNotes(){
    noteService.query().then(setNotes)
}

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
    })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

// console.log(notes)
    return(
        <section className="note-index">
            <NoteList notes={notes} onRemoveNote={onRemoveNote}/>
        </section>
    ) 
}
