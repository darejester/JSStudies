const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// arrow notation is a short hand for passing a function call.
// ex. short hand for "addButton.addEventListener('click', myFunction)()"
// addButton.addEventListener('click', () => {
//     const taskText = taskInput.value;
//     if (taskText !== '') {
//         const listItem = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         listItem.textContent = taskText;

//         //this needs to be inside because the declaration of "textContent is local to this block"
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => {
//             listItem.remove();
//         });

//         listItem.appendChild(deleteButton);
//         taskList.appendChild(listItem);
//         taskInput.value = '';
//     }
// });




//without arrow notation
function deleteTask(event) {
    event.target.parentNode.remove();
}

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;   
    
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask); // Pass the function as a callback
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
addButton.addEventListener('click', addTask);