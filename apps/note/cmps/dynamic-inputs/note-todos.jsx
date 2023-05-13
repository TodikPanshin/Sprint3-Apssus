const { useState,useEffect } = React

export function NoteTodos({ note }) {
    const [isDone, setIsDone] = useState(note.isDone)

    useEffect(() => {
        
    }, [isDone])


    function onHandleClick(todoId) {
        const todo=getTodo(todoId)
        todo.isDone=!todo.isDone
        if(todo.isDone) todo.doneAt=new Date()
        else todo.doneAt=null
        
    }

    const info = note.info
    return (
        <section className="note-todo">
            <h3>{info.title}</h3>
            <ul className="clean-list">
                {info.todos.map(todo =>
                    <li key={todo.id} className={todo.isDone ? "done" : ""} onClick={() => onHandleClick(todo.id)}>{todo.txt}</li>
                )}
            </ul>
        </section>
    )
}