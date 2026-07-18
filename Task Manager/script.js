const main = document.querySelector("main");

const header = document.createElement("header");
header.classList.add("header");
header.innerHTML = `
<h1>Task Manager</h1>
      <p class="tagline">Manage your daily tasks</p>
`;
const addForm = document.createElement("form");
addForm.classList.add("add-form");
addForm.innerHTML = `
<input type="text" id="taskInput" class="input" placeholder="What needs to be done?" />
      <select id="priorityInput" class="select">
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
      <button id="addBtn" class="btn-add">+ Add</button>`;

const nav = document.createElement("nav");
nav.classList.add("tabs");
nav.innerHTML = `
       <button class="tab active" >All</button>
      <button class="tab">Done</button>
`;

const list = document.createElement("div");
list.classList.add("tasks");

main.append(header, addForm, nav, list);

const inputTask = document.querySelector("#taskInput");
const priorityInput = document.querySelector("#priorityInput");
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("form");
let arr = [];
let count = 0;
let editIndex = null;

// Helper: render a task div
function createTaskElement(task, priority, id) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("data-status", "todo");
  div.setAttribute("data-id", id);
  div.innerHTML = `
    <input type="checkbox" class="task-check" />
    <span class="task-name">${task}</span>
    <span class="prio low">${priority}</span>
    <button class="btn-edit" title="Edit">Edit</button>
    <button class="btn-del" title="Delete">Delete</button>
  `;
  return div;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = event.target[0].value;
  let priority = event.target[1].value;

  if (task.trim() === "") {
    alert("Please Write Something in Task..");
    return;
  }

  if (editIndex !== null) {
    // EDIT MODE: update existing task in DOM + arr
    const taskDiv = document.querySelector(`[data-id="${editIndex}"]`);
    taskDiv.querySelector(".task-name").textContent = task;
    arr[editIndex].task = task;
    arr[editIndex].priority = priority;

    // Reset edit mode
    editIndex = null;
    addBtn.textContent = "+ Add";
  } else {
    // ADD MODE: create new task
    const taskId = count++;
    const div = createTaskElement(task, priority, taskId);
    list.appendChild(div);
    arr.push({ task, priority, id: taskId });
  }

  form.reset();
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-edit")) {
    const element = event.target.parentElement;
    const nameSpan = element.querySelector(".task-name");
    const taskId = parseInt(element.getAttribute("data-id"));

    // Fill form with current task data
    inputTask.value = nameSpan.textContent;

    // Set edit mode
    editIndex = taskId;
    addBtn.textContent = "Save";
  } else if (event.target.classList.contains("btn-del")) {
    const element = event.target.parentElement;
    const taskId = parseInt(element.getAttribute("data-id"));

    // Remove from arr
    arr = arr.filter((item) => item.id !== taskId);

    // Remove from DOM
    element.remove();
  }
});