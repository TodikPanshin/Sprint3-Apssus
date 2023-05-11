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
        <section>
            <h3>{info.title}</h3>
            <ul>
                {info.todos.map(todo =>
                    <li key={todo.id} className={todo.isDone ? "done" : ""} onClick={() => onHandleClick(todo.id)}>{todo.txt}</li>
                )}
            </ul>
        </section>
    )
}