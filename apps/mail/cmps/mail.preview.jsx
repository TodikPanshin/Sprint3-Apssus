// import { utilService } from "../services/util.service.js"

export function MailPreview({ mail }) {

    let { from, subject, body, sentAt } = mail
    const date = new Date(sentAt);
    const options = { day: 'numeric', month: 'short' };
    sentAt = date.toLocaleDateString('en-US', options);

    return (
        <article className="mail-preview flex justify-between list">
            <input type="checkbox" name="" id="" />
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