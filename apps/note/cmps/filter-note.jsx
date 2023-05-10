const { useState, useEffect } = React

export function FilterNote({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { title } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter Our notes</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="title">note txt:</label>
                <input value={title} onChange={handleChange} name="title" id="title" type="text" placeholder="By Title" />

                <button>Filter Notes</button>
            </form>

        </section>
    )
}