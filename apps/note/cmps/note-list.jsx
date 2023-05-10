const { Link } = ReactRouterDOM

import{NotePreview} from "./note-preview.jsx"

export function NoteList({notes,onRemoveNote}) {

    return (
notes.map(note=>
    <li>key={note.id}
    
    
    </li>
    )

    )
}
