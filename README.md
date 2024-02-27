# dom-sba

# To-Do List Web Application

## Overview

This is a simple interactive To-Do List web application built using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them as completed, and view a numbered list of tasks. It incorporates various features, including DOM manipulation, event handling, and basic styling.

## Features

- **Add Task:** Users can enter a new task in the input field and click the "Add Task" button to add it to the list.

- **Mark as Completed:** Tasks can be marked as completed by clicking on them. Completed tasks have a different background color.

- **Input Validation:** The application ensures that a task must have at least three characters before adding it.

- **Task Numbering:** Tasks are numbered sequentially, providing a clear order.

- **Task Counter:** A counter at the top of the page displays the total number of tasks.

## Usage

1. Clone the repository or download the source code.

    
   

2. Open the `index.html` file in a web browser.

3. Use the form to add new tasks, mark tasks as completed, and interact with the to-do list.

## Technologies Used

- **HTML:** The main HTML file containing the structure of the application.

- **CSS:** The CSS file for styling the application.

- **JavaScript:** The JavaScript file (`script.js`) containing the logic for adding tasks, marking tasks as completed, and numbering tasks.

## Event Listeners

1. **Form Submission Event:**
   - Description: Listens for the submission of the form to add a new task.
   - Event Type: `submit`
   - Event Handler Function: `addTask`

2. **Task List Click Event:**
   - Description: Listens for clicks on the task list items to mark tasks as completed.
   - Event Type: `click`
   - Event Handler Function: `toggleTask`

3. **Window Resize Event:**
   - Description: Listens for window resize events.
   - Event Type: `resize`
   - Event Handler Function: `handleWindowResize`

## BOM Properties/Methods

1. **Window Load Event:**
   - Description: Listens for the window load event to number existing tasks when the page loads.
   - Event Type: `load`
   - Event Handler Function: `numberTasks`

2. **Online/Offline Status Events:**
   - Description: Listens for online/offline status changes.
   - Event Types: `online`, `offline`
   - Event Handler Function: `handleOnlineStatusChange`

3. **LocalStorage Usage:**
   - Usage: `localStorage.setItem('key', 'value');` and `localStorage.getItem('key');`
   - Example: Storing and retrieving online status in localStorage.



## Acknowledgments

- Built with love and JavaScript.

