//variables

const inputEl = document.querySelector("input");
const addButtonEl = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const clearAllBtnEl = document.querySelector(".clear-all");


//Add List Item 

const addTask = (e) => {
  e.preventDefault();
  const newLiItemEl = document.createElement('li');
  const delLiItemBtnEl = document.createElement('button');
  delLiItemBtnEl.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";

  if (inputEl.value !== '') {
    newLiItemEl.textContent = inputEl.value;
    newLiItemEl.appendChild(delLiItemBtnEl);
    todoList.appendChild(newLiItemEl);
    console.log(todoList)
    inputEl.value=''

  }else {
    alert('Please enter a task!')
  }

  // Delete function
  delLiItemBtnEl.addEventListener('click', function() {
    const del = confirm('You are about to delete this task!!')
    if (del == true) {
      
    }
  })

}
addButtonEl.addEventListener('click', addTask);

