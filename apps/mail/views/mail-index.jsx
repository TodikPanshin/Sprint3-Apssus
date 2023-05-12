const { Link } = ReactRouterDOM

const { useEffect, useState } = React


import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailNavbar } from "../cmps/mail-navbar.jsx"
import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setMails] = useState([])
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
        <section className="mail-index">
            <MailNavbar loadMails={loadMails} filterBy={filterBy} setMails={setMails} />
            <div >
                <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <MailList mails={mails} />
            </div>
        </section>

    )
}

