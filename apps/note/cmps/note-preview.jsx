const { useEffect, useState } = React

import { noteService } from "../services/note.service.js"
import { ColorInput } from "./color-input.jsx"
import { NoteImg } from "./dynamic-inputs/note-img.jsx"
import { NoteTodos } from "./dynamic-inputs/note-todos.jsx"
import { NoteTxt } from "./dynamic-inputs/note-txt.jsx"
import { NoteVideo } from "./dynamic-inputs/note-video.jsx"


export function NotePreview({ note, onRemoveNote, onOpenEnlargeBackground, menuBackgroundIsOpen ,onCopyNote}) {
    const [noteToEdit, setNoteToEdit] = useState(note)
    const [isEnlarged, setIsEnlarged] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    const [NoteStyle, setNoteStyle] = useState({
        backgroundColor: 'lightGray'
    })



    useEffect(() => {
        if (!menuBackgroundIsOpen) {
            setIsEnlarged(false)
        }
    }, [menuBackgroundIsOpen])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setNoteToEdit(noteToEdit => ({ ...noteToEdit, info: { [field]: value } }))
        onSaveNote()
    }


    function onSaveNote(ev) {
        if (ev) ev.preventDefault()
        noteService.save(noteToEdit)
    }

    function handleEnlarged() {
        setIsEnlarged(true)
        onOpenEnlargeBackground()
    }

    function onSetNoteStyle(newStyle) {
        setNoteStyle((prevStyle) => ({ ...prevStyle, ...newStyle }))
    }



    return (
        <li className={`note  ${(isEnlarged) ? 'enlarged' : ''}  `} onClick={() => { handleEnlarged() }} style={NoteStyle}>

            <DynamicCmp note={noteToEdit} handleChange={handleChange} />

            <section className="note-controller" onClick={ev => ev.stopPropagation()} >
                <button onClick={() => onRemoveNote(note.id)}>x</button>
                <button onClick={() =>setIsHidden(!isHidden) } >color</button>
                <button onClick={() => onCopyNote(note.id)}>duplicat</button>
            <ColorInput onSetNoteStyle={onSetNoteStyle} isHidden={isHidden} />
            </section>
        </li>
        
                
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