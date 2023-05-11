import { mailService } from "../services/mail.service.jsx";

const { useParams, useNavigate } = ReactRouterDOM
const { useEffect, useState } = React

export function MailDetails(){
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        loadMail()
    }, [])
    
    function loadMail() {
        mailService.get(params.mailId)
            .then(setMail)
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
        .then(()=>{
            navigate('/mail')
            // showSuccessMsg('Review saved')
        })
    }


    if (!mail) return <div>Loading...</div>
    
    return (
    <section className="mail-details grid">
        <div className="flex justify-between">
        <h3>from:  {mail.from}</h3>
        <h3>sent At:  {mail.sentAt}</h3>

        </div>
        {mail.body}
        <button onClick={onBack}>Back To Email</button>
        <button onClick={()=>onRemoveMail(mail.id)} >Dlete This Email</button>
    </section>
        )
}
 









// const { Link } = ReactRouterDOM

// import { LongTxt } from "../cmps/long-txt.jsx"
// import { ReviewList } from "../cmps/review-list.jsx"
// import { bookService } from "../services/book.service.js"
// import { utilService } from "../services/util.service.js"

// export function BookDetails() {

//     // const [reviews, setReview] = useState(null)
//     const params = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         loadBook()
//     }, [])


//     function onBack() {
//         navigate('/book')
//     }

//     if (!book) return <div>Loading...</div>

//     const { id, title, subtitle, listPrice: { amount, isOnSale, currencyCode }, pageCount, publishedDate, description } = book

//     function txtPageCount() {
//         if (pageCount > 500) return 'Serious Reading'
//         else if (pageCount > 200) return 'Descent Reading'
//         else if (pageCount < 100) return 'Light Reading'
//         else return ''
//     }

//     function txtPublishDate() {
//         const currentYear = new Date().getFullYear()
//         const diff = currentYear - publishedDate

//         if (diff > 10) return 'Vintage'
//         else if (diff < 1) return 'New'
//         else return ''
//     }

//     function getPriceColor() {
//         if (amount > 150) return 'red'
//         else if (amount < 20) return 'green'
//         else return ''
//     }

//     function onRemoveReview(bookId, reviewId) {
//         bookService.removeReview(bookId, reviewId)
//         .then(()=>{
//             const updatedReviews = book.reviews.filter(review => review.id !== reviewId)
//             setBook({...book, reviews:updatedReviews})
//             showSuccessMsg('Review saved')
//         })
//     }

//     return (
//         <section className="book-details">
//             <h1>Book Title: {title}</h1>
//             <h2>Sub Title: {subtitle}</h2>
//             <h3 className={getPriceColor()}>Price: {amount}{utilService.getSymbolCurrency(currencyCode)}</h3>
//             <h3 className="on-sale">{isOnSale ? 'On Sale!' : ''}</h3>
//             <img src={book.imgId ? `../assets/img/${book.imgId}` : `../assets/img/default-book.png`} alt={title} />
//             <h3>Description:</h3>
//             <LongTxt txt={description} length={100} />
//             <h3>Published date: {publishedDate} | {txtPublishDate()}</h3>
//             <h3>Number of pages: {pageCount} | {txtPageCount()} </h3>
//             <button><Link to={`/book/${book.id}/review`}>Add Review</Link></button>
            
//            {!!book.reviews.length && <ReviewList reviews={book.reviews} onRemoveReview={onRemoveReview} bookId={id} />}
//             <button onClick={onBack}>Back</button>
//         </section>
//     )

// }