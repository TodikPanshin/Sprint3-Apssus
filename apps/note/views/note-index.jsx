const { useEffect, useState } = React
const { Link, useSearchParams } = ReactRouterDOM

import { Header } from "../cmps/header.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { FilterNote } from "./filter-note"

import { noteService } from "../services/note.service.js"



export function NoteIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter(searchParams))
    const [notes, setNotes] = useState([])
    
    
    useEffect(() => {
        loadNotes()
        setSearchParams(filterBy)
    }, [filterBy])
    

function loadNotes(){
    noteService.query(filterBy).then(setNotes)
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
            <Header/>
            {/* <FilterNote onSetFilter={onSetFilter} filterBy={filterBy}/> */}
            <NoteList notes={notes} onRemoveNote={onRemoveNote}/>
        </section>
    ) 
}
