const input = document.querySelector('#input');
const buttons = document.querySelector('button');
const lists = document.querySelector('.lists');
var todos = [];
var editedId;
var isEdited = false;
function showTodo() {
var txt = '';
for (var i = 0; i < todos.length; i++) {
  txt += `<div class="list" id="${i}">
                    <div class="list-item">
                        <input type="checkbox" id="${i}">
                        <label for="item" id="item">${todos[i]}</label>
                    </div>
                        <div class="buttons">
                        <button onclick="editTodo(${i})" id="${i}">EDIT</button>
                        <button onclick="deleteTodo(this)" id="${i}">DELETE</button>
                    </div>
                </div>`;
};
lists.innerHTML = txt;
};

function editTodo(x) {
  editedId = x;
 input.value = todos[editedId];
 isEdited = true;
};

function deleteTodo(x) {
  let todoID = x.id;
  todos.splice(todoID, 1);
 showTodo();
}

input.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    var newItem = input.value.trim();
    if (!isEdited) {
    todos.push(newItem);
    }else {
      isEdited = false;
      todos[editedId] = newItem;
    }
    input.value = "";
    showTodo();
  }
});