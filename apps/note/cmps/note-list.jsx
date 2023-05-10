const { Link } = ReactRouterDOM

// import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, }) {
console.log(notes)
    

return (
  <ul className="note-list">
    {notes.map(note =>
            <li key={note.id}>
            
            {/* <NotePreview note={note}/> */}
            {/* <button onClick={()=> onRemoveNote(note.id)}></button> */}
            </li>
        )}
        </ul>
)
    }

