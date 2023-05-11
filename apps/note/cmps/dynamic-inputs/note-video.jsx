export function NoteVideo({note}){
    const info=note.info
    
        return(
           <section>
            <video src={info.url}></video>
            </section>
        )
    }