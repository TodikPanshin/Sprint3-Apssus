const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
        // onSetFilter(filterByToEdit)

    }

    // function onSubmitFilter(ev) {
    //     ev.preventDefault()
    //     onSetFilter(filterByToEdit)


    const { txt, isRead } = filterByToEdit

    return (
        <section className="mail-filter">

            {/* <form onSubmit={onSubmitFilter}> */}
            <label htmlFor="txt"></label>
            <input value={txt} onChange={handleChange} name="txt" id="txt" type="txt" placeholder="By Text" />

            <label htmlFor="maxPrice"></label>
            <input value={isRead} onChange={handleChange} type="checkbox" name="isRead" id="isRead" placeholder="By Is Read" />

        </section>
    )
}




















