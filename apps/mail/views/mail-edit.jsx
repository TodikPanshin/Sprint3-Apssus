const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailEdit({ closeModal, loadMails }) {
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        if (field === 'amount') {
            setMailToEdit(prevMail => ({ ...prevMail, listPrice: { ...prevMail.listPrice, amount: value } }))
        } else {
            setMailToEdit(prevMail => ({ ...prevMail, [field]: value }))
        }
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        const date = new Date
        const options = { day: 'numeric', month: 'short' }
        const sentIn = date.toLocaleDateString('en-US', options)
        mailToEdit.sentAt = sentIn
        mailService.save(mailToEdit)
            .then(() => {
                loadMails()
                closeModal()
                // showSuccessMsg('Mail sent successfully!')
            })
    }


    function onDelete() {
        navigate('/mail')
    }

    const { to, subject, body } = mailToEdit


    return (
        < section className="mail-edit grid" >
            <h2 className="title">New Mail</h2>
            <form onSubmit={onSaveMail} className="grid book-edit-form">
                <input required onChange={handleChange} value={to} type="text" name="to" id="to" placeholder="To" />

                <label htmlFor="subject" className="subject"></label>
                <input required onChange={handleChange} value={subject} type="text" name="subject" id="Subject" placeholder="subject" />

                <label htmlFor="body"></label>
                <input className="body" onChange={handleChange} value={body} type="text" name="body" id="body" />

                <button onClick={onSaveMail}>Send</button>
                <button onClick={onDelete}>Delete</button>
            </form>
        </section >)
}