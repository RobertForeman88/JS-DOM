// define ui var

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventlisteners();

// load all event listeners
function loadEventlisteners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks events
  filter.addEventListener('keyup', filterTasks);
}

// get task from local storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } 

  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create a new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to the li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });
}

// add task
function addTask(e){
  if(taskInput.value === ''){
  alert('add a task');
}

// create li element
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// create a new link element
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// append the link to the li
li.appendChild(link);
// append li to ul
taskList.appendChild(li);
// Store in Local Storage
storeTaskInLocalStorage(taskInput.value);
// Clear input
taskInput.value = '';

  e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

// remove from Local storage *** it sis not have an id so we passed the whole li into the ()
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from Local Storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear task
function clearTasks(){
  // this works but.....
  // taskList.innerHTML = '';

  // faster with while loop
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from Local Storage
  clearFromLocalStorage();
}
// Clear task from Local storage
function clearFromLocalStorage(){
  localStorage.clear();
}
// filter tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item =task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
