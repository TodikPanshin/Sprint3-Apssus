const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails }) {


    return (
        <ul className="mail-list no-bullet">
            {mails.map((mail) => (
                <Link to={`/mail/${mail.id}`} key={mail.id}>
                    <li className="list">
                        <MailPreview mail={mail} />
                    </li>
                </Link>
            ))}
        </ul>
    );
}
