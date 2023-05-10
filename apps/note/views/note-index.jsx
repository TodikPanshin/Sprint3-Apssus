const { useEffect, useState } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'


export function NoteIndex() {
    const [nots, setNotes] = useState([])

    useEffect(() => {
        noteService.query().then(setNotes)
    })

    return <div>note app</div>
}
