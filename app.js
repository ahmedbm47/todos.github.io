//Selectors
const todoInput =document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList =document.querySelector('.todo-list');
//event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck); 
//filterOption.addEventListener("click",filterTodo);
//Functions
function addTodo(event){
    
    event.preventDefault();// prevent from submitting
    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);

}
function deleteCheck(e){
const item = e.target;
//delete todo
if(item.classList[0]=== 'trash-btn'){
const todo = item.parentElement;
//Animation
todo.classList.add("fall");
removeLocalTodos(todo);
todo.addEventListener('transitionend',function(){
    todo.remove();
});
}
//check mark
if(item.classList[0]=== "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}





