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

                 // Update the task count after adding a new task
                updateTaskCount();

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

        
        // Event handler for input changes
        function handleInput() {
            const inputValue = newTaskInput.value;

            // Display a message in the console when the input changes
            console.log('Input value changed:', inputValue);
        }
    // Example of parent-child-sibling relationships and iteration
function numberTasks() {
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach((task, index) => {
        const currentText = task.textContent.trim();
        const dotIndex = currentText.indexOf('.') + 1;

        if (dotIndex > 0) {
            // If a dot is found, update the numbering
            task.textContent = `${index + 1}. ${currentText.substring(dotIndex).trim()}`;
        } else {
            // If no dot is found, add the numbering
            task.textContent = `${index + 1}. ${currentText}`;
        }
    });

     // Log the number of tasks to the console
     console.log('Number of Tasks:', tasks.length);
}


// Call the function when the page loads to number existing tasks
window.addEventListener('load', numberTasks);





// // Function to handle online/offline status change
function handleOnlineStatusChange() {
    const isOnline = navigator.onLine;
    console.log('Online status:', isOnline);

    // Example of using localStorage to store and retrieve data
    if (isOnline) {
        // If online, store data in localStorage
        localStorage.setItem('onlineStatus', 'Online');
    } else {
        // If offline, retrieve and log data from localStorage
        const storedStatus = localStorage.getItem('onlineStatus');
        console.log('Stored Online Status:', storedStatus || 'No stored status');
    }
}

// Add an initial check when the page loads
handleOnlineStatusChange();


   // Function to handle window resize event
   function handleWindowResize() {
    const windowWidth = window.innerWidth;
    console.log('Window width:', windowWidth);
}

// Add the window resize event listener
window.addEventListener('resize', handleWindowResize);


// Create a counter element
const counterElement = document.createElement('p');
counterElement.textContent = 'Tasks Count: 0';

// Append the counter element to the body
document.body.appendChild(counterElement);


// Function to update the task count
function updateTaskCount() {
    const taskCount = taskList.children.length;  // Use taskList.children instead of querying the DOM again
    counterElement.textContent = `Tasks Count: ${taskCount}`;
}

