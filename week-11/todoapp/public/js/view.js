'use strict'

const createDisplay = function() {
    const todoList = document.querySelector('#todo-list');
    const addedTodo = document.querySelector('.input');
    const addTodo = document.querySelector('.button');
    const checkedList = document.querySelectorAll('.checked');
    const uncheckedList = document.querySelectorAll('.unchecked');
    const delList = document.querySelectorAll('.del');

    const renderTodos = (response) => {
        const todos = {todos: response};
        const displayTodos = '{{#todos}} {{#if completed}} <li class="list-item">{{todo_name}}<p class="icons"><span class="del"></span><span class="checked"></span></p></li> {{else}} <li class="list-item">{{todo_name}}<p class="icons"><span class="del"></span><span class="unchecked"></span></p></li> {{/if}} {{/todos}}'
        const compiledTodos = Handlebars.compile(displayTodos);
        const generatedHTML = compiledTodos(todos);
        todoList.innerHTML = generatedHTML;
    };

    return {
        addedTodo,
        addTodo,
        checkedList,
        uncheckedList,
        delList,
        renderTodos
    };
};
