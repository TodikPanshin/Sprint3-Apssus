const { useEffect, useState } = React

import { MailEdit } from "../cmps/mail-edit.jsx"
import { mailService } from "../services/mail.service.js"

export function MailNavbar({ loadMails, filterBy, setMails }) {
    const [showModal, setShowModal] = useState(false)

    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }


    return (
        <section className="mail-navbar">
            <button onClick={() => setShowModal(true)}>New Mail</button>
            {showModal && <MailEdit closeModal={() => setShowModal(false)} className="modal" loadMails={loadMails} />}
            <button className="inbox nb-btn">Inbox</button>
            <button className="starred nb-btn">Starred</button>
            <button className="sent nb-btn">Sent</button>
            <button className="drafts nb-btn">Drafts</button>
            <button className="trash nb-btn">Trash</button>
        </section>
    )



}