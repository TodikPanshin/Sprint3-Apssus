import { utilService } from '../../../services/util.service.js'

export const todoService = {
    getEmptyTodo
}

function getTodo(todoId){
    return  
}

function getEmptyTodo(){
    return {
        id: utilService.makeId(),
        txt,
        doneAt: null,
        isDone: false,
    }
}


