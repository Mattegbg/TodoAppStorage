/* 
1. För varje todo i arrayen så:
    1. Skapa upp en li - tagg
    2. Lägg in todo - texten i vår li-tagg
    3. Lägg till li-taggen i vår ul
*/

const todosElem = document.querySelector('#todos');
const todosFromStorage = localStorage.getItem('myTodos');


function createTodoItem(todo) {
    const todoElem = document.createElement('li');
    todoElem.innerHTML = todo.task;
    todosElem.append(todoElem);
}


function displayTodos(todos) {
    for(const todo of todos) {
        console.log(todo);
        createTodoItem(todo);
    }
}

function saveToLocalStorage(todos) {
    localStorage.setItem('myTodos', JSON.parse.stringify(todos));

}


async function getTodos() {
    const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
    const data = await response.json();

    console.log(data);
    displayTodos(data.todos);
    saveToLocalStorage(data.todo);
}



if (todosFromStorage) {
    console.log(todosFromStorage);
    displayTodos(JSON.parse(todosFromStorage));

} else {
    getTodos();
}

