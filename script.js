// Get the elements from the document
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");

// Initialize a variable to store the number of tasks
let numTasks = 0;

// Add an event listener to the add button
addButton.addEventListener("click", function() {
  
    // Get the value of the input field
    const todoText = todoInput.value.trim();
    
    // Check if the input is not empty
    if (todoText) {

        // Create a new li element for the todo item
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        // Create a checkbox for the todo item
        const todoCheck = document.createElement("input");
        todoCheck.type = "checkbox";
        todoCheck.addEventListener("change", function() {

            // Toggle the done class on the todo item
            todoItem.classList.toggle("done");
        });

        // Create a span for the todo text
        const todoSpan = document.createElement("span");
        todoSpan.className = "todo-text";
        todoSpan.textContent = todoText;

        // Create a button for deleting the todo item
        const todoDelete = document.createElement("button");
        todoDelete.className = "todo-delete";
        todoDelete.textContent = "X";
        todoDelete.addEventListener("click", function() {

            // Add a class of fade-out to the todo item
            todoItem.classList.add("fade-out");
        
            // Remove the todo item from the list after 0.3 seconds
            setTimeout(function() {
                todoList.removeChild(todoItem);
        
                // Decrease the number of tasks by one
                numTasks--;
        
                // Update the task count text
                taskCount.textContent = `You have ${numTasks} tasks`;
            }, 300); // Change this value to adjust the delay
        });
        

        // Append the checkbox, span, and button to the li element
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(todoSpan);
        todoItem.appendChild(todoDelete);

        // Append the li element to the ul element
        todoList.appendChild(todoItem);

        // Clear the input field
        todoInput.value = "";

        // Increase the number of tasks by one
        numTasks++;

        // Update the task count text
        taskCount.textContent = `You have ${numTasks} tasks`;
    }
});
