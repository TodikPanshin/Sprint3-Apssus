import { noteService } from "../services/note.service.js"
const { useEffect, useState } = React

export function Header({loadNotes}) {

    const [newNote, setNewNote] = useState(noteService.getEmptyNote())
    const [isExpanded, setExpanded] = useState(false)
    useEffect(() => {
        setType('NoteTxt')
    }, [])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        const { info } = newNote
        if(field==='NoteTxt'){
        setNewNote(newNote =>({ ...newNote,info:{ txt: value }}))
    }else if(field==='NoteImg'){
            setNewNote(newNote =>({ ...newNote,info:{ 
                url: value,
                title:title
             }}))
        }

        // url: 'http://some-img/me',
        // //         title: 'Bobi and Me'
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        if (!newNote) return
        noteService.save(newNote)
        loadNotes()
    }

    function setType(noteType) {
        newNote.type = noteType
    }

    function expand(){
        setExpanded(true)
    }

    return (
        <section>
            <form className="create-note" onSubmit={onSaveNote}>
            {/* {isExpanded ? <input name={newNote.type} id={newNote.type} value={newNote.info.txt} onChange={handleChange} placeholder='add new note' />: null} */}
                <textarea name={newNote.type} id={newNote.type} onChange={handleChange} onClick={expand} value={newNote.info.txt} rows={isExpanded ? 3 : 1}/>
                <button>add</button>
            </form>
            <button onClick={() => setType('NoteTxt')}>txt</button>
            <button onClick={() => setType('NoteImg')}>img</button>
        </section>
    )
}