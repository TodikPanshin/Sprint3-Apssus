const { useEffect, useState, useRef } = React
const { Link, useSearchParams, useLocation, Outlet } = ReactRouterDOM

import { Header } from "../cmps/header.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { FilterNote } from "./filter-note"
import { NoteModal } from "../cmps/note-modal.jsx"


import { noteService } from "../services/note.service.js"



export function NoteIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter(searchParams))
    const [notes, setNotes] = useState([])
    const [menuBackgroundIsOpen, setMenuBackgroundIsOpen] = useState(false)
    // const noteRef = useRef(null)

    useEffect(() => {
        loadNotes()
        setSearchParams(filterBy)
    }, [filterBy])


    function loadNotes() {
        noteService.query(filterBy).then(setNotes)
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
        })
    }

    function onCopyNote(noteId) {
        noteService.get(noteId)
            .then(note => noteService.copyNote(note))
            .then(cloneNote => { noteService.save(cloneNote) })
            .then(()=>loadNotes)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }


    return (

        <section className="note-index">
            <div className={`main-screen menu-background ${(menuBackgroundIsOpen) ? 'open' : ''}`} onClick={() => {
                setMenuBackgroundIsOpen(false)
            }} >
            </div>
            <Header loadNotes={loadNotes} />
            {/* <FilterNote onSetFilter={onSetFilter} filterBy={filterBy}/> */}
            <NoteList notes={notes} onCopyNote={onCopyNote} onRemoveNote={onRemoveNote} onOpenEnlargeBackground={() => { setMenuBackgroundIsOpen(true) }} menuBackgroundIsOpen={menuBackgroundIsOpen} />
        </section>
    )
}


