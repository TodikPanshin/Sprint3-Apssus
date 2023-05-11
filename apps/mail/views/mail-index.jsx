const { Link } = ReactRouterDOM

const { useEffect, useState } = React


import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailEdit } from "./mail-edit.jsx"

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())


    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    return (
        <section className="mail-index full main-layout">
            <button onClick={() => setShowModal(true)}>New Mail</button>
            {showModal && <MailEdit closeModal={() => setShowModal(false)} loadMails={loadMails} className="modal" />}

            {/* <button><Link to="/book/edit">New Mail</Link></button> */}
            <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <MailList mails={mails} />
        </section>

    )
}

