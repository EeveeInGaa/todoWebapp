let todoArr = [];

const addButton = document.querySelector("#add-button");
const inputTodo = document.querySelector("#input-todo");
const listOfTodos = document.querySelector("#todo-list");

addButton.addEventListener("click", addTodoToList);

//add todo to list using the 'add it' button
function addTodoToList() {
    //get user input in list 
    const textInput = inputTodo.value;

    //add only if todo has got at least 5 characters 
    if(textInput.length < 5) {
        console.log("please add at least 5 characters");
        return;
    } 

    //create custom id for every todo
    const todoId = textInput.trim().toLowerCase().replaceAll(" ", "-");
    
    //create object for state an push it
    const newTodo = {
        description: textInput,
        done: false,
        todoID: todoId,
    };
    todoArr.push(newTodo);

    //clear text after user input
    inputTodo.value = "";
    
    //create list element
    const createListElement = document.createElement("li");
    createListElement.obj = newTodo;
    listOfTodos.appendChild(createListElement);
    
    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", todoId);
    createListElement.appendChild(checkbox);
    
    //create label for checkbox (to check when clicking on the label)
    const label = document.createElement("label");
    const textNode = document.createTextNode(textInput);
    label.setAttribute("for", todoId);
    label.appendChild(textNode);
    createListElement.appendChild(label);
    
    //strike todos when checkbox is checked
    checkbox.addEventListener("change", function() {
         if(createListElement.className != "checked") {
             createListElement.className = "checked";
         } else {
             createListElement.className = "";
         }
     });
}

//edit State when checkbox is checked 
listOfTodos.addEventListener("change", function (e) {
    const stateOfDone = e.target.checked;
    const todoObj = e.target.parentElement.obj;
    todoObj.done = stateOfDone;
    console.log(todoArr);
});

//show all todos 
const showAllTodos = document.querySelector("#all");
showAllTodos.addEventListener("click", function () {
    for (let i = 0; i < listOfTodos.children.length; i++) {
      listOfTodos.children[i].hidden = false;
    }
});

//filter for open todos
const openTodosFilter = document.querySelector("#open");
openTodosFilter.addEventListener("click", function () {
    for (let i = 0; i < listOfTodos.children.length; i++) {
      const todoObj = listOfTodos.children[i].obj;
      if(todoObj.done === true) {
          listOfTodos.children[i].hidden = true;
        } else {
           listOfTodos.children[i].hidden = false;
           todoObj.done === false;
        }
    }
});

//filter for done todos
const doneTodosFilter = document.querySelector("#done");
doneTodosFilter.addEventListener("click", function () {
    for (let i = 0; i < listOfTodos.children.length; i++) {
      const todoObj = listOfTodos.children[i].obj;
      if (todoObj.done === false) {
            listOfTodos.children[i].hidden = true;
        } else {
           listOfTodos.children[i].hidden = false;
           todoObj.done === true;
        }
    }
});
getRestData();

//GET data from API
function getRestData() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch("http://localhost:4730/todos", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            for(let i = 0; i < data.length; i++) {
               console.log(todoArr);
               //li erstellen 
               //einhängen
            }
        });
}