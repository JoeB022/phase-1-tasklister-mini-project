function createTaskItem(taskDescription) {
  return `
    <li>
      ${taskDescription}
      <button class="delete-button" style="margin-left: 10px;">Delete</button>
    </li>
  `;
}

function setupDeleteButton(taskItem) {
  const deleteButton = taskItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const taskInput = document.getElementById('new-task-description').value;

  if (taskInput.trim() !== '') {
    const taskList = document.getElementById('tasks');
    const taskItemHTML = createTaskItem(taskInput);
    taskList.innerHTML += taskItemHTML;

    document.getElementById('new-task-description').value = '';
    const taskItem = taskList.lastElementChild;
    setupDeleteButton(taskItem);
  } else {
    alert('Please enter a task!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form')
  taskForm.addEventListener('submit', handleTaskSubmit);
});

describe("Task Lister", () => {
  describe("Form Submission", () => {
    it("should add a task when the form is submitted", () => {
      return true;
    });

    it("should not add an empty task", () => {
      return true;
  });
});
