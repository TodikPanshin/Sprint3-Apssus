import { NotePreview } from "./note-preview"

export function NoteModal({ note ,isOpen,onClose}) {
    if(!isOpen){
        return null
    }


    return(
        <div className="note-modal" onClick={onClose}>
            <ul className="modal-container clean-list" onClick={ev=>ev.stopPropagation()} >
                <button onClick={onClose}>X</button>
                <li><NotePreview  note={note}/></li>
                </ul>
          </div>
    )
    }