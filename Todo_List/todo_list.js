const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');

        //this needs to be inside because the declaration of "textContent is local to this block"
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});