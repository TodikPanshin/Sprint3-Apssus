// import { utilService } from "../services/util.service.js"

export function MailPreview({ mail }) {

    const { from, subject, body, sentAt, isRead } = mail
    const handleCheckboxClick = (event) => {
        event.stopPropagation()
    }

    return (
        <section className={`mail-preview flex align-center justify-between list ${mail.isRead ? 'opened' : ''}`}>
            <input type="checkbox" onClick={handleCheckboxClick} name="" id="" />
            <article className="from">{from}</article>
            <article className="subject">{subject} <span className="body">{body.substring(0, 50 - subject.length) + '...'}</span></article>
            <article className="sentAt">{sentAt}</article>
        </section>
    )
}