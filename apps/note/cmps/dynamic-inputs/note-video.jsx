export function NoteVideo({note}){
    const info=note.info
    
        return(
           <section className={note.id}>
            <video controls src={info.url}></video>
            </section>
        )
    }