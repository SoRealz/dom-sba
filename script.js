    // Cache elements
    const newTaskInput = document.getElementById('newTaskInput');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

       // Event listeners
       taskForm.addEventListener('submit', addTask);
       taskList.addEventListener('click', toggleTask);
       newTaskInput.addEventListener('input', handleInput);

        // Function to add a new task
        function addTask(event) {
            event.preventDefault();

            const taskText = newTaskInput.value;

            if (taskText.trim().length >= 3) {
                // Create new task element with DocumentFragment
                const fragment = document.createDocumentFragment();
                const taskElement = document.createElement('li');
                taskElement.textContent = taskText;

                // Append task to the fragment
                fragment.appendChild(taskElement);

                // Add fragment to the list
                taskList.appendChild(fragment);

                // Clear input
                newTaskInput.value = '';

                // Number the tasks after adding
                numberTasks();
            } else {
                // Display an error message or take other actions for invalid input
                alert('Please enter at least three characters for the task.');
            }
        }

         // Function to toggle task completion
         function toggleTask(event) {
            const clickedElement = event.target;

            if (clickedElement.tagName === 'LI') {
                // Toggle the completed class
                clickedElement.classList.toggle('completed');

                // Modify the data-status attribute
                const currentStatus = clickedElement.getAttribute('data-status');
                const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
                clickedElement.setAttribute('data-status', newStatus);
            }
        }

