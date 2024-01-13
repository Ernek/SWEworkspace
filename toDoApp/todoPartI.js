const form = document.querySelector("#todoFrame");
const input = document.querySelector("#todoElement");
const todoList = document.querySelector('#todo-List');

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {

        if (e.target.getAttribute('data-id') == 'doneBtn'){
            // console.log("THIS IS THE DONE BUTTON")   
            e.target.parentElement.classList.toggle('completed')
            // console.log('Strike THROUGH')
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
    const newToDo = document.createElement('li');
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-id', 'doneBtn');
    doneBtn.setAttribute('class', 'doneBtn');
    // doneBtn.setAttribute('name', 'btn_name')
    doneBtn.innerText = 'Done';
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('data-id', 'removeBtn');
    removeBtn.innerText = 'Delete';
    newToDo.innerText = input.value + '   '; 
    input.value = '';
    newToDo.appendChild(doneBtn);
    newToDo.appendChild(removeBtn);
    todoList.appendChild(newToDo);
});