let todoArr = [];

const addButton = document.querySelector("#add-button");
const inputTodo = document.querySelector("#input-todo")
const listOfTodos = document.querySelector("#todo-list");

addButton.addEventListener("click", addTodoToList);

//add todo to list using the 'add it' button
function addTodoToList() {
    //get user input in list 
    const textInput = inputTodo.value;
    const todoId = textInput.trim().toLowerCase().replaceAll(" ", "-");
    
    // create object for state an push it
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
    
    //disable add button when there is no text in input field --need to fix--
    if(inputTodo.length === 0) {
        addButton.disabled;
    }
    
    //strike todos when checkbox is checked
    checkbox.addEventListener("change", function() {
         if(createListElement.className != "checked") {
             createListElement.className = "checked";
         } else {
             createListElement.className = "";
         }
     })
}

listOfTodos.addEventListener("change", function (e) {
    const stateOfDone = e.target.checked;
    const todoObj = e.target.parentElement.obj;
    todoObj.done = stateOfDone;
    console.log(todoArr);
})