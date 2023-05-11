const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

export function NoteList({notes,onRemoveNote,onOpenModal}) {
    
    return (
        <ul className="note-list clean-list">
            {notes.map(note =>
                <li className="note" key={note.id} onClick={()=>{onOpenModal(note)}} >
                    <NotePreview note={note}/>
                    <section className="note-controller" onClick={ev=>ev.stopPropagation()}>
                    <button onClick={() => onRemoveNote(note.id)}>x</button>
                    </section>
                </li>
            )}
        </ul>
    )
}

