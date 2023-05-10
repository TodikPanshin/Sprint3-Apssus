export function MailList({ mails }) {

    return (
        <ul className="mail-list">
            {mails.map(mail =>
                <li key={mail.id}>
                    <Preview mail={mail} />
                    {/* <section>
                        <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button><Link to={`/book/${book.id}`} >Details</Link ></button>
                        <button><Link to={`/book/edit/${book.id}`} >Edit</Link></button>

                    </section> */}
                </li>
            )}
        </ul>
    )


}
