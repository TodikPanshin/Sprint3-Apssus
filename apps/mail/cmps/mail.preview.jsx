// import { utilService } from "../services/util.service.js"

export function MailPreview({ mail }) {

    const { from, subject, body, sentAt } = mail
    return (
        <article className="mail-preview flex justify-between">
            <h2>{from}</h2>
            <h2>{subject}</h2>
            <h3>{body}</h3>
            <h4>{sentAt}</h4>
            {/* <h4>Price: {amount}
                {utilService.getSymbolCurrency(currencyCode)}</h4>
            <img src={thumbnail ? `${thumbnail}` : `../assets/img/default-book.png`} alt="" /> */}
        </article>
    )
}