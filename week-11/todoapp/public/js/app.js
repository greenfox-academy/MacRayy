'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createDisplay();
    let newTodo = view.addedTodo.value;

    view.addTodo.addEventListener('click', () => {
        console.log(view.addedTodo.value);
        postTodo(view.addedTodo.value);
    });

    const getTodos = () => {
        const endpoint = 'http://localhost:3000/todos';
        ajax.ajax(endpoint, 'GET', (response) => {
            view.renderTodos(response);
        });
    };

    const postTodo = (input) => {
        const endpoint = 'http://localhost:3000/post-todo';
        ajax.ajax(endpoint, 'POST', () => {
            console.log('hey');
           getTodos();
        }, input);
    };

    return {
        getTodos
    }
}

const app = createController();
app.getTodos();
