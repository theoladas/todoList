//selectors
const userInput = document.querySelector(".userInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
//functions
function addTodo(e) {
  e.preventDefault();
  const newTodoContainer = document.createElement("div");
  newTodoContainer.classList.add("newTodoDiv");
  const newTodo = document.createElement("li");
  newTodo.classList.add("newTodo");
  newTodoContainer.append(newTodo);
  const deleteTodoButton = document.createElement("button");
  deleteTodoButton.innerHTML = '<i class="fas fa-minus-square"></i>';
  deleteTodoButton.classList.add("deleteButton");
  const completeTodoButton = document.createElement("button");
  completeTodoButton.innerHTML = '<i class="fas fa-check-square"></i>';
  completeTodoButton.classList.add("completeButton");
  newTodoContainer.append(deleteTodoButton, completeTodoButton);
  let userInputText = userInput.value;
  newTodo.innerText = userInputText;
  todoList.append(newTodoContainer);
  userInput.value = "";
}
//events
todoButton.addEventListener("click", addTodo);
