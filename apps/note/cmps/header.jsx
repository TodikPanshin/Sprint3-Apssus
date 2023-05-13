const { useEffect, useState, useRef } = React


import { noteService } from "../services/note.service.js"

export function Header({ loadNotes }) {

    const [newNote, setNewNote] = useState(noteService.getEmptyNote())
    const [isExpanded, setExpanded] = useState(true)



    // useEffect(() => {
    //     setType('NoteTxt')
    // }, [])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setNewNote(newNote => ({ ...newNote, info: { [field]: value } }))
    }


    function onSaveNote(ev) {
        ev.preventDefault()
        console.log(ev)
        if (!newNote.info) return
        noteService.save(newNote)
            .then(noteService.query())
            .then(loadNotes)
        setExpanded(true)
    }

    function setType(noteType) {
        expand(noteType)
    }

    function expand(noteType) {
        setExpanded(false)
        setNewNote(noteService.getEmptyNote(noteType))

    }
    const { info } = newNote
    return (
        <section className="note-header">
            <form className="create-note" onSubmit={onSaveNote}>
                {isExpanded ? (
                    <input className="default-input" name="default" id="default" onClick={()=>{expand("NoteTxt")}} placeholder='add new note' value='' />
                ) : (
                    <React.Fragment>
                        {newNote.type === "NoteTxt" && (
                            <div className="edit-NoteTxt">
                                <input required type="text" name="txt" id="txt" onChange={handleChange} value={info.txt} placeholder='add new note text' />
                            </div>
                        )}
                        {newNote.type === "NoteImg" && (
                            <div className="edit-NoteImg">
                                <input required type="text" name="title" id="title" onChange={handleChange} value={info.title} placeholder='add new img Title' />
                                <input required type="text" name="url" id="url" onChange={handleChange} value={info.url} placeholder='add new img url' />

                            </div>
                        )}

                        {newNote.type === "NoteVideo" &&(
                            <div className="edit-NoteVideo">
                                <input required type="text" name="title" id="title" onChange={handleChange} value={info.title} placeholder='add new video Title' />
                                <input required type="text" name="url" id="url" onChange={handleChange} value={info.url} placeholder='add new video url' />

                            </div>
                        )}
                    </React.Fragment>
                )}
                <button><i className="fa-solid fa-plus"></i></button>
            </form>
            <section className="note-add-controller">
            <button onClick={() => setType('NoteTxt')}><i className="fa-solid fa-font"></i></button>
            <button onClick={() => setType('NoteImg')}><i className="fa-regular fa-image"></i></button>
            <button onClick={() => setType('NoteVideo')}><i className="fa-solid fa-video"></i></button>
            </section>
        </section>
    )
}
