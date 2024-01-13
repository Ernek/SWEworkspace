document.addEventListener("DOMContentLoaded", function() {

const form = document.querySelector("#todoFrame");
const input = document.querySelector("#todoElement");
const todoList = document.querySelector('#todo-List');

// get whatever is already in localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].todoElement;
  newTodo.classList = savedTodos[i].classList == 'completed' ? 'completed' : '';
  if (newTodo.classList == 'completed') {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}


todoList.addEventListener("click", function(e) {
    // localStorage.getItem(e)
    if (e.target.tagName === "BUTTON") {

        if (e.target.getAttribute('data-id') == 'doneBtn'){
            // console.log("THIS IS THE DONE BUTTON")   
            e.target.parentElement.classList.toggle('completed')
        }
        else if (e.target.getAttribute('data-id') == 'removeBtn') {
            // console.log("THIS IS THE REMOVE BTN")
            e.target.parentElement.remove();
        } else {
            console.log("NOTHING")
        }
        
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(input.value);
    // Create List item
    const newToDo = document.createElement('li');
    // Create Done button
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-id', 'doneBtn');
    doneBtn.setAttribute('class', 'doneBtn');
    // doneBtn.setAttribute('name', 'btn_name')
    doneBtn.innerText = 'Done';
    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('data-id', 'removeBtn');
    removeBtn.innerText = 'Delete';
    // Create Text of To-Do based on User input, input html field inside Form 
    newToDo.innerText = input.value + '   '; 
    input.value = '';
    newToDo.className = ''
    // Add Done Button to ToDo list element newToDo
    newToDo.appendChild(doneBtn);
    // Add Remove Button to ToDo list element newToDo
    newToDo.appendChild(removeBtn);
    // Add List (SHOW)
    todoList.appendChild(newToDo);

   savedTodos.push({ todoElement: newToDo.innerText, class: newToDo.className}) 
   // Create the local Storage named "todos" 
   localStorage.setItem("todos", JSON.stringify(savedTodos));
});
});