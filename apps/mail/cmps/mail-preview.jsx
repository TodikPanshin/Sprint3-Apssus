// import { utilService } from "../services/util.service.js"

export function MailPreview({ mail }) {

    let { from, subject, body, sentAt, isRead } = mail
    const date = new Date(sentAt);
    const options = { day: 'numeric', month: 'short' };
    sentAt = date.toLocaleDateString('en-US', options);

    const handleCheckboxClick = (event) => {
        event.stopPropagation()
    }


    return (
        <article className={`mail-preview flex justify-between list ${isRead}`}>
            <input type="checkbox" onClick={handleCheckboxClick} name="" id="" />
            <h2>{from}</h2>
            <h2>{subject}</h2>
            <h3>{body.substring(0, 10) + '...'}</h3>
            <h4>{sentAt}</h4>
        </article>
    )
}