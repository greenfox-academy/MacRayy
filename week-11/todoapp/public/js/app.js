'use strict'

const createController = function() {
    const ajax = createAjax();

    const getTodos = () => {
        const endpoint = 'http://localhost:3000/todos';
        ajax.ajax(endpoint, 'GET', (response) => {
            console.log('I got the data');
            // view.renderPlaylists(response);
        });
    };

    return {
        getTodos
    }
}

const app = createController();
app.getTodos();
