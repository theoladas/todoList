//selectors
const userInput = document.querySelector(".userInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");
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
  newTodoContainer.append(completeTodoButton, deleteTodoButton);
  let userInputText = userInput.value;
  newTodo.innerText = userInputText;
  todoList.append(newTodoContainer);
  userInput.value = "";
}
function deleteCheckedTodo(e) {
  const item = e.target;
  if (item.classList[0] === "deleteButton") {
    const newTodoLi = item.parentElement;
    newTodoLi.classList.add("fallEffectTodo");
    newTodoLi.addEventListener("transitionend", function () {
      newTodoLi.remove();
    });
  }
  if (item.classList[0] === "completeButton") {
    const newTodoLi = item.parentElement;
    newTodoLi.classList.toggle("checkedTodo");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("checkedTodo")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("checkedTodo")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
//events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckedTodo);
filterOption.addEventListener("change", filterTodo);
