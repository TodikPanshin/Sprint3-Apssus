export function NoteModal({ note ,isOpen,onClose}) {

    if(!isOpen){
        return null
    }
    return(
        <div className="note-modal" onClick={onClose}>
            <ul onClick={ev=>ev.stopPropagation()}>
                <button onClick={onClose}>X</button>
                <li>{info.txt}</li>
                </ul>
          </div>
    )
    }