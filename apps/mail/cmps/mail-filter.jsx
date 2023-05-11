const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        console.log(target);
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        console.log(value);
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
        onSetFilter(filterByToEdit)
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
        console.log('onSubmitFilter');
    }

    const { txt } = filterByToEdit

    return (
        <section className="mail-filter">

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt"></label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="By Text" />

                <label htmlFor="select-isRead">Show mail:</label>
                <select id="select-isRead" onChange={handleChange} name="isRead">
                    {/* <option value="">Show mail</option> */}
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="noRead">Not Read</option>
                </select>
            </form>

        </section>
    )
}

