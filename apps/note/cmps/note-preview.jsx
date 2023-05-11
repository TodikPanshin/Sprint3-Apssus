const { useEffect, useState } = React

import { noteService } from "../services/note.service.js"
import { NoteImg } from "./dynamic-inputs/note-img.jsx"
import { NoteTodos } from "./dynamic-inputs/note-todos.jsx"
import { NoteTxt } from "./dynamic-inputs/note-txt.jsx"
import { NoteVideo } from "./dynamic-inputs/note-video.jsx"
 

export function NotePreview({ note }) {
    const [noteToEdit, setNoteToEdit] = useState(note)

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setNoteToEdit(noteToEdit =>({ ...noteToEdit,info:{ [field]: value }}))
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        if (!noteToEdit.info.txt) {
            return
        }
        noteService.save(noteToEdit)
    }

    return (
        <article className="note-preview">
            
            <DynamicCmp note={note} handleChange={handleChange}   />
            
        </article>

    )
}

function DynamicCmp(props) {
    switch (props.note.type) {
        case 'NoteTxt':
            return <NoteTxt {...props} />
        case 'NoteImg':
            return <NoteImg {...props} />
        case 'NoteVideo':
            return <NoteVideo {...props} />
        case 'NoteTodos':
            return <NoteTodos {...props} />
    }
}