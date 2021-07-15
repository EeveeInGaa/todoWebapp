const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addTodoToList);

const listOfTodos = document.querySelector("#todo-list");
let todoArr = [];

//add todo to list using the 'add it' button
function addTodoToList() {
    //create list element
    const createListElement = document.createElement("li");
    listOfTodos.appendChild(createListElement);
    
    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    createListElement.appendChild(checkbox);

    //get user input in list and clear text after user input
    const text = document.querySelector("#input-todo").value;
    const textNode = document.createTextNode(text);
    createListElement.appendChild(textNode);
    todoArr.push(text);
    document.querySelector("#input-todo").value = "";

}
