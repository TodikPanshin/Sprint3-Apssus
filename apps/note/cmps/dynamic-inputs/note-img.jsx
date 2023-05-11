
export function NoteImg({note}){
const info=note.info

    return(
       <section>
       <img src={info.url} alt={info.title} /> 
        </section>
    )
}