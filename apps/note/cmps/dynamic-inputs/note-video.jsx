export function NoteVideo({note}){
    const info=note.info
    
        return(
           <section>
            <video controls src={info.url}></video>
            </section>
        )
    }