let todo = document.getElementById("todo")
let btn = document.getElementsByTagName("button")
let todos = document.getElementsByClassName("todos")
btn[0].addEventListener("click", add)

function add(){
todos[0].insertAdjacentHTML(
    "beforeend",
    `<div class='box'>${todo.value}</div>`
  );
}