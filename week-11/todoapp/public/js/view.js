'use strict'

const createDisplay = function() {
    const todoList = document.querySelector('#todo-list');

    const renderTodos = (response) => {
        const todos = {todos: response};
        const displayTodos = '{{#todos}} <li class="list-item">{{todo_name}}<p class="icons"><span class="del"></span><span class="unchecked"></span></p></li> {{/todos}}'
        console.log(displayTodos);
        console.log(todoList);
        const compiledTodos = Handlebars.compile(displayTodos);
        const generatedHTML = compiledTodos(todos);
        todoList.innerHTML = generatedHTML;
    };

    return {
        renderTodos
    };
};
