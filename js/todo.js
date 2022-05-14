const toDoForm = document.getElementById("todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo-list");
const toDos_key = "toDos";

let toDos = [];

// todo 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  hi.remove();
}

function saveTodos() {
  localStorage.setItem(toDos_key, JSON.stringify(toDos));
}

// 버튼 누르면 doto 저장하면서 ❌ 뜨게하는거
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  button.innerText = "❌";
  toDolist.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

// submit에 기본기능을 제어하고 내가 원하는 값을 뽑아내서 newtodo에 저장하고
// 값이 입력됐으면 칸을 안보이게 해주면서 paintTodo()를 실행하는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoinput.value;
  toDoinput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(toDos_key);

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
