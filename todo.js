'use strict';

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-todo');
const todos = document.querySelector('.todos');

const deleteStorage = (id) => {
    document.querySelector(`[data-id="${id}"]`)
    .parentElement.remove();
    localStorage.removeItem(id);
}
const addDeleteEventListener = id =>{
    document.querySelector(`[data-id="${id}"]`)
    .addEventListener('click', ()=> deleteStorage(id));
}

const createTodo = (text, id) => {
    const item = document.createElement('div');
        item.classList.add('todo');
        item.innerHTML = `<input type="checkbox" class="completed" name="completed" data-set-id="${id}"> ${text} <button class="delete-button" data-id="${id}">X</button>`;
        todos.insertBefore(item, todos.firstChild);
}
let storageId =1;
const addTodo =() => {
    if(todoInput.value) {
        createTodo(todoInput.value, storageId);
        localStorage.setItem(storageId.toString(), todoInput.value);
        addDeleteEventListener(storageId);
        todoInput.value ='';
        storageId +=1;
    }
}

Object.keys(localStorage).forEach((keys) => {
        createTodo(localStorage.getItem(keys),keys);
        addDeleteEventListener(keys);

});

const addTodoButtonListener = () => {
    addButton.addEventListener('click', addTodo);
};


addTodoButtonListener();
