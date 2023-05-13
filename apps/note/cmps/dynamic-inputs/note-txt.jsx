const { useEffect, useState } = React
export function NoteTxt({ note, handleChange, onSaveNote }) {

    const { info } = note

    

    return (
        <section className={note.id}> 
            <textarea type="text" name="txt" onChange={handleChange} value={info.txt} />  
        </section>
    )
}