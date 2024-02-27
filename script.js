    // Cache elements
    const newTaskInput = document.getElementById('newTaskInput');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

       // Event listeners
       taskForm.addEventListener('submit', addTask);
       taskList.addEventListener('click', toggleTask);
       newTaskInput.addEventListener('input', handleInput);

