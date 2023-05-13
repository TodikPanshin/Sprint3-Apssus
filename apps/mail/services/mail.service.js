import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const demoData = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: utilService.makeLorem(300),
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
]
const MAIL_KEY = 'mailDB'

_createMails()

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.subject))
            }

            if (filterBy.isRead === "read") mails = mails.filter(mail => mail.isRead === true)
            else if (filterBy.isRead === "noRead") mails = mails.filter(mail => mail.isRead === false)
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    // return axios.get(BOOK_KEY, bookId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: '',
        removedAt: '',
        from: 'user@appsus.com',
        to: ''
    }
}

function getDefaultFilter() {
    return { txt: '', isRead: false }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = demoData
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail(vendor, minPrice = 250) {
    const book = getEmptyBook(vendor, minPrice)
    book.id = utilService.makeId()
    return book
}
