
export function NoteImg({note}){
const info=note.info

    return(
       <section className={note.id}>
       <img src={info.url} alt={info.title} /> 
        </section>
    )
}