'use strict'

const createController = function() {
    const ajax = createAjax();
    const view = createDisplay();

    const getTodos = () => {
        const endpoint = 'http://localhost:3000/todos';
        ajax.ajax(endpoint, 'GET', (response) => {
            view.renderTodos(response);
        });
    };

    return {
        getTodos
    }
}

const app = createController();
app.getTodos();
