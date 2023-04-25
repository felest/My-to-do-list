//get elements from html

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//add event listener to add task button
addTaskBtn.addEventListener("click", addTask);

//function to add task
function addTask(){
    const taskValue = taskInput.value;  //get task input value
    if(taskValue !== ""){
        const newTask = document.createElement("li");  //create new task
        newTask.innerText = taskValue;

        //create button to mark task as completed
        const completeBtn = document.createElement("button");
        completeBtn.innerText = "Completed";
        completeBtn.addEventListener("click", markAsCompleted);  //add event listener to mark task as completed

        //create button to remove the task
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", removeTask);  //add event listener to remove the task

        //add buttons to task element
        newTask.appendChild(completeBtn);
        newTask.appendChild(deleteBtn);

        taskList.appendChild(newTask);  //add new task to task list

        taskInput.value = "";    //clear task input
    }
}

//function to mark task as completed
function markAsCompleted(event){
    event.target.parentNode.classList.toggle("completed");  //toggle completed class on task element
}

//function to remove task
function removeTask(event){
    event.target.parentNode.remove();   //remove task element from task list
}

