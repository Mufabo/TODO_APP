import css from "./style.css";

function createTodo(descr, dueDate){
    return {descr, dueDate}
}


class Project {
    constructor(title){
        this.title = title;
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(todo){
        todo = null;
    }
}



