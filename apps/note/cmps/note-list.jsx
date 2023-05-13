const { useEffect, useState, useRef } = React


import { NotePreview } from "./note-preview.jsx"

export function NoteList(props) {

    return (
        <ul className="note-list clean-list">
            {props.notes.map(note =>
                <NotePreview key={note.id} note={note} onRemoveNote={props.onRemoveNote} onCopyNote={props.onCopyNote}
                 onOpenEnlargeBackground={props.onOpenEnlargeBackground} 
                 menuBackgroundIsOpen={props.menuBackgroundIsOpen} />
            )}
        </ul>
    )
}

