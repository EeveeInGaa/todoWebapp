//add todo to list using the 'add it' button

//something is wrong, generates a checkbox no matter where i click
const addButton = document.querySelector("#add-button");
const ul = document.querySelector("#todo-list");
let todoArr = [];



function addTodoToList() {
    console.log("add button wird angesprochen")
    const createListElement = document.createElement("li");
    ul.appendChild(createListElement);
    
    const text = document.querySelector("#input-todo").value;
    const textNode = document.createTextNode(text);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    todoArr.push(text);

    // createListElement.appendChild(checkbox);
    createListElement.appendChild(textNode);
    
}
addButton = addEventListener("click", addTodoToList);
document.getElementById("add-button").addEventListener("click", function(event){event.preventDefault()});
