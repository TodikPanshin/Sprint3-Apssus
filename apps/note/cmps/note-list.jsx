const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

export function NoteList({notes,onRemoveNote,onOpenModal}) {
    
    return (
        <ul className="note-list clean-list">
            {notes.map(note =>
                <li key={note.id} onClick={()=> onOpenModal(note.id)} >
                    <NotePreview note={note}/>
                    <section>
                    <button onClick={() => onRemoveNote(note.id)}>x</button>
                    </section>
                </li>
            )}
        </ul>
    )
}

