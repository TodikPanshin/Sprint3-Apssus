// import { utilService } from "../services/util.service.js"

export function MailPreview({ mail }) {

    const { from, subject, body, sendAt } = mail
    return (
        <article className="mail-preview">
            <h2>Book subject: {subject}</h2>
            {/* <h4>Price: {amount}
                {utilService.getSymbolCurrency(currencyCode)}</h4>
            <img src={thumbnail ? `${thumbnail}` : `../assets/img/default-book.png`} alt="" /> */}
        </article>
    )
}