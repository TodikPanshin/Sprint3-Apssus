import { NotePreview } from "./note-preview"

export function NoteModal({ note ,isOpen,onClose}) {
    if(!isOpen){
        return null
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setCarToEdit(prevCar => ({ ...prevCar, [field]: value }))
    }

    return(
        <div className="note-modal" onClick={onClose}>
            <ul onClick={ev=>ev.stopPropagation()}>
                <button onClick={onClose}>X</button>
                <li><NotePreview  note={note}/></li>
                </ul>
          </div>
    )
    }