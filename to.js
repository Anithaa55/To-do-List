function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var task = taskInput.value;

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    var li = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        if (checkbox.checked) {
            li.classList.add('completed');
            taskList.appendChild(li); // Move to bottom
        } else {
            li.classList.remove('completed');
            taskList.insertBefore(li, taskList.firstChild); // Move to top
        }
    };

    var text = document.createElement('span');
    text.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(text);
    taskList.insertBefore(li, taskList.firstChild);

    taskInput.value = '';
}
