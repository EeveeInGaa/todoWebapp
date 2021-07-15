//add todo to list using the 'add it' button

//something is wrong, generates a checkbox no matter where i click
let addButton = document.querySelector("#add-button");
addButton = addEventListener("click", addTodoToList);

function addTodoToList() {
    const createListElement = document.createElement("li");
    const checkbox = document.createElement("input");
    const text = document.getElementById("input-todo").value;
    const textNode = document.createTextNode(text);
    const masterList = document.querySelector("#todo-list");

    checkbox.type = "checkbox";
    createListElement.appendChild(checkbox);
    createListElement.appendChild(textNode);

    document.getElementById("todo-list").appendChild(createListElement);
}


