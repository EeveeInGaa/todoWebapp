let todoArr = [];

const addButton = document.querySelector("#add-button");
const inputTodo = document.querySelector("#input-todo")
const listOfTodos = document.querySelector("#todo-list");

addButton.addEventListener("click", addTodoToList);

//add todo to list using the 'add it' button
function addTodoToList() {
    const text = inputTodo.value;
    //get user input in list and clear text after user input
    const textNode = document.createTextNode(text);
    todoArr.push(text);
    inputTodo.value = "";

    //create list element
    const createListElement = document.createElement("li");
    createListElement.classList.add("list-element");
    
    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    
    
    //strike todos when checkbox is checked
    checkbox.addEventListener("change", function() {
        if(createListElement.className != "checked") {
            createListElement.className = "checked";
        } else {
            createListElement.className = "";
        }
    })

    listOfTodos.appendChild(createListElement);
    createListElement.appendChild(checkbox);
    createListElement.appendChild(textNode);
}

