import { mailService } from "../services/mail.service.js"

const { useEffect, useState } = React

export function MailEdit() {
    const [bookToEdit, setBookToEdit] = useState(mailService.getEmptyBook())











} 