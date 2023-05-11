// note service
import {storageService} from '../../../services/async-storage.service.js'
import {utilService} from '../../../services/util.service.js'

const NOTE_KEY ='noteDB'

_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
}


function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt))
            }
            return notes
}
)
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getDefaultFilter(searchParams = { get: () => { } }) {
    return {
        txt: searchParams.get('txt') || '',
        type: searchParams.get('type') || ''
    }
}

function getEmptyNote(type = '',) {
    return { id: '',
    createdAt:new Date(),
    isPinned:false,
    style: {
        backgroundColor: '#00d'
    },
     type,
     info:{},
    }
}

function _createNotes() {
    
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        _createDemoNots()
    }
}

function _createNote(type = 'NoteTxt',info) {
    const note = getEmptyNote(type)
    note.id = utilService.makeId()

    switch (note.type) {
        case 'NoteTxt':
            return _createNoteTxt(note,info)
            break
        case 'NoteImg':
            console.log('NoteImg')
            break
        case 'NoteVideo':
            console.log('NoteVideo')
            break
        case 'NoteTodos':
            console.log('NoteTodos')
            break

    }
}

function _createNoteTxt(note,info){
    return note.info=info
}


function _createDemoNots() {
    const notes = [
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: '#00d'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: '#00d'
            },
            info: {
                txt: 'note to self make note'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteTxt',
            isPinned: false,
            style: {
                backgroundColor: '#00d'
            },
            info: {
                txt: 'responsive design is the best'
            }
        },
        {
            id: 'n102',
            createdAt: 1112222,
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'http://some-img/me',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        // {
        //     id: 'n103',
        //     createdAt: 1112222,
        //     type: 'NoteTodos',
        //     isPinned: false,
        //     info: {
        //         title: 'Get my stuff together',
        //         todos: [
        //             { id:utilService.makeId() ,txt: 'Driving license', doneAt: null ,isDone: false,},
        //             { id:utilService.makeId() ,txt: 'Coding power', doneAt: 187111111,isDone: true, }
                // ]
            // }
        // }
    ]
    utilService.saveToStorage(NOTE_KEY, notes)
}

