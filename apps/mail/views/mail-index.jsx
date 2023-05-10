import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

const { useEffect, useState } = React

export function MailIndex() {
    const [mails, setMails] = useState([])

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(setMails)
    }

    return (
        <section className="mail-index full main-layout">
            <MailList mails={mails} />
        </section>

    )
}

