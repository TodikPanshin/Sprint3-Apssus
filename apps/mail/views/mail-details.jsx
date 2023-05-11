import { mailService } from "../services/mail.service.jsx";

const { useParams, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(params.mailId)
            .then(mail => {
                setMail(mail)
                mail.isRead = true
                mailService.save(mail)
            })
            .catch(err => {
                console.log('Had issued in book details:', err);
                navigate('/book')
            })
    }

    function onBack() {
        navigate('/mail')
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                navigate('/mail')
                // showSuccessMsg('Review saved')
            })
    }

    if (!mail) return <div>Loading...</div>

    return (
        <section className={`mail-details grid`}>
            <div className="flex justify-between">
                <h3>from:  {mail.from}</h3>
                <h3>sent At:  {mail.sentAt}</h3>
            </div>
            {mail.body}
            <button onClick={onBack}>Back To Email</button>
            <button onClick={() => onRemoveMail(mail.id)} >Dlete This Email</button>
        </section>
    )
}

