
export function NoteTxt({ note,handleChange }) {


    return (
        <section >
            <input type="text" name="NoteTxt" onChange={handleChange} value={note.info.txt} />
        </section>
    )
}