const form = document.querySelector("#todoList");
const input = document.querySelector("#todoElement");
const todoList = document.querySelector('#todo-List');


form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(input.value);
    const newToDo = document.createElement('li');
    newToDo.innerText = input.value; 
    input.value = '';
    todoList.appendChild(newToDo);
});


// const todoElement = document.querySelectorAll("#")