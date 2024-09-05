// Imports
import {
  clockDivElement,
  todosDivElement,
  inProgressDivElement,
  doneDivElement,
  todosCounterHeadingElement,
  inProgressCounterHeadingElement,
  doneCounterHeadingElement
} from './variables.js';

import { buildTaskTemplate } from './templates.js';

// Mehtods creation
function getTime() {
  const date = new Date();
  let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();

  clockDivElement.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function setDataToLocalStorage(data) {
  localStorage.setItem('tasks', JSON.stringify(data));
}

function getDataFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
}

function render(payload) {
  const todoList = payload.filter(task => task.status === 'todo');
  const inProgressList = payload.filter(task => task.status === 'in-progress');
  const doneList = payload.filter(task => task.status === 'done');

  todosCounterHeadingElement.textContent = todoList.length;
  inProgressCounterHeadingElement.textContent = inProgressList.length;
  doneCounterHeadingElement.textContent = doneList.length;

  todosDivElement.innerHTML = '';
  inProgressDivElement.innerHTML = '';
  doneDivElement.innerHTML = '';

  todoList.forEach(element => {
    todosDivElement.insertAdjacentHTML('beforeend', buildTaskTemplate(element));
  })

  inProgressList.forEach(element => {
    inProgressDivElement.insertAdjacentHTML('beforeend', buildTaskTemplate(element));
  })

  doneList.forEach(element => {
    doneDivElement.insertAdjacentHTML('beforeend', buildTaskTemplate(element));
  })
}

export {
  getTime,
  setDataToLocalStorage,
  getDataFromLocalStorage,
  render
};
