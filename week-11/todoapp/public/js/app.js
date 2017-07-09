'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createDisplay();
    let newTodo = view.addedTodo.value;

    view.addTodo.addEventListener('click', () => postTodo(view.addedTodo.value));

    const setEventListeners = () => {
        view.checkedList.forEach((todoItem) => {
            todoItem.addEventListener('click', () => {
                console.log('clicked');
            });
        });
    };

    const getTodos = () => {
        const endpoint = 'http://localhost:3000/todos';
        ajax.ajax(endpoint, 'GET', (response) => {
            view.renderTodos(response);
            setEventListeners();
        });
    };

    const postTodo = (input) => {
        const endpoint = 'http://localhost:3000/post-todo';
        ajax.ajax(endpoint, 'POST', () => {
            getTodos();
        }, input);
    };

    const updateTodo = () => {
        const endpoint = 'http://localhost:3000/update-todo';
        console.log('update');
    }

    return {
        getTodos
    };
}

const app = createController();
app.getTodos();
