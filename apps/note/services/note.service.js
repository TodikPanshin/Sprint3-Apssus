// note service
import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
    copyNote,
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

function getEmptyNote(type = 'NoteTxt') {
    
    return {
        id: '',
        createdAt: new Date(),
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        type,
        info: {},
    }
}

function copyNote(note){
 const cloneNote= structuredClone(note)
 cloneNote.id=''
 cloneNote.createdAt=new Date()
 return cloneNote
}

function _createNotes() {

    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        _createDemoNots()
    }
}

function _createNote(type = 'NoteTxt') {
    switch (type) {
        case 'NoteTxt':
            return _createNoteTxt()
        case 'NoteImg':
            _createNoteImg()
        case 'NoteVideo':
            _createNoteVideo()
        case 'NoteTodos':
            _createNoteTodos()
    }
}

function _createNoteTxt() {
    return {
        txt: '',
    }
}

function _createNoteImg() {
    return {
        url: '',
        title: ''
    }
}

function _createNoteVideo() {
    return {
        url: '',
        title: ''
    }
}

function _createNoteTodos() {
    return {
        title: '',
        todos:[ __createTodos()]
    }
}

function __createTodos() {
    return {
        id: utilService.makeId(),
        txt: '',
        doneAt: null,
        isDone: false,
    }
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
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'assets/img/20190101_155342.jpg',
                title: 'sleepy'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'assets/img/WhatsApp Image 2022-10-04 at 22.10.39.jpeg',
                title: 'alisa'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'assets/img/20230508_140017.jpg',
                title: 'pazuzu'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'assets/img/20211104_211342.jpg',
                title: 'sleepy and alisa'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'assets/img/IMG-20140425-WA0093.jpg',
                title: 'lady'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteVideo',
            isPinned: false,
            info: {
                url: 'assets/vid/20230211_105922.mp4',
                title: 'hati'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: utilService.makeId(),
            createdAt: new Date(),
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { id: utilService.makeId(), txt: 'Driving license', doneAt: null, isDone: false, },
                    { id: utilService.makeId(), txt: 'Coding power', doneAt: 187111111, isDone: true, }
                ]
            }
        }
    ]
    utilService.saveToStorage(NOTE_KEY, notes)
}

