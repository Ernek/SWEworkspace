document.addEventListener("DOMContentLoaded", function() {

const form = document.querySelector("#todoFrame");
const input = document.querySelector("#todoElement");
const todoList = document.querySelector('#todo-List');

// Get all the to-do elements from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// Loop over them and to create them 
for (let i = 0; i < savedTodos.length; i++) {
  let newToDo = document.createElement("li");
  newToDo.innerText = savedTodos[i].todoElement;
  newToDo.isCompleted = savedTodos[i].isCompleted ? true : false;
  // Activate the strike if it was a task DONE 
  if (newToDo.isCompleted) {
    newToDo.style.textDecoration = "line-through";
  }

  // Append to-do list element to ul
  todoList.appendChild(newToDo);
  // Create buttons and add them 
  const doneBtn = document.createElement('button');
  doneBtn.setAttribute('data-id', 'doneBtn');
  doneBtn.setAttribute('class', 'doneBtn');
  // doneBtn.setAttribute('name', 'btn_name')
  doneBtn.innerText = 'Done';
  // Create Remove button
  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('data-id', 'removeBtn');
  removeBtn.innerText = 'Delete';
  // Add Done Button to ToDo list element newToDo
  newToDo.appendChild(doneBtn);
  // Add Remove Button to ToDo list element newToDo
  newToDo.appendChild(removeBtn);
  // Add List (SHOW)
  todoList.appendChild(newToDo);

}

// Form to Add new list elements from user input 
form.addEventListener('submit', function(e){
    // Override action defaults for the event 
    e.preventDefault();
    // Create List item
    const newToDo = document.createElement('li');
    // Create Done button
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-id', 'doneBtn');
    doneBtn.setAttribute('class', 'doneBtn');
    doneBtn.innerText = 'Done';
    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('data-id', 'removeBtn');
    removeBtn.innerText = 'Delete';
    // Create Text of To-Do based on User input, input html field inside Form 
    newToDo.innerText = input.value + ' '; 
    newToDo.isCompleted = false;
    // Create the local Storage named "todos" 
    savedTodos.push({ todoElement: newToDo.innerText, isCompleted: newToDo.isCompleted}) 
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    input.value = '';
    // Add Done Button to ToDo list element newToDo
    newToDo.appendChild(doneBtn);
    // Add Remove Button to ToDo list element newToDo
    newToDo.appendChild(removeBtn);
    // Add List (SHOW)
    todoList.appendChild(newToDo);

});

// Actions of List elements (DONE or REMOVE)
todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.getAttribute('data-id') == 'doneBtn'){
            // e.target.parentElement.isCompleted.toogle(true)
            if (!e.target.parentElement.isCompleted) {
                e.target.parentElement.style.textDecoration = "line-through";
                e.target.parentElement.isCompleted = true;
              } else {
                e.target.parentElement.style.textDecoration = "none";
                e.target.parentElement.isCompleted = false;
              }
            console.log(e.target.parentElement.isCompleted)
            var text = '';
            for (var j = 0; j < e.target.parentElement.childNodes.length; ++j) {
                if (e.target.parentElement.childNodes[j].nodeType === Node.TEXT_NODE) {
                    text += e.target.parentElement.childNodes[j].textContent;
                }
            }
            
            for (let i = 0; i < savedTodos.length; i++) {
                if (savedTodos[i].todoElement === text) {
                  savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
                  localStorage.setItem("todos", JSON.stringify(savedTodos));
                }
              }
        }
        else if (e.target.getAttribute('data-id') == 'removeBtn') {
            e.target.parentElement.remove();
            var text = '';
            for (var j = 0; j < e.target.parentElement.childNodes.length; ++j) {
                if (e.target.parentElement.childNodes[j].nodeType === Node.TEXT_NODE) {
                    text += e.target.parentElement.childNodes[j].textContent;
                }
            }
            
            for (let i = 0; i < savedTodos.length; i++) {
                if (savedTodos[i].todoElement === text) {
                    console.log(i)
                    if (i == 0){
                        savedTodos.splice(i,1);
                    }
                    else {
                        var deletedItem = savedTodos.splice(i,i);
                    }
                    console.log(savedTodos)
                    localStorage.setItem("todos", JSON.stringify(savedTodos));
                }
              }
        } else {
            console.log("NOTHING")
        }
        
    }
})
});