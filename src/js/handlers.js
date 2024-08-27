//Imports
import { addFormElement } from './variables.js';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage
} from './helpers.js';
import { Task } from './models.js';

// Event handlers declaration
function handleSubmitFormAdd(event) {
  const tasksList = getDataFromLocalStorage();
  const formData = new FormData(event.target);
  const title = formData.get('addTitle');
  const description = formData.get('addText');
  const assignedUser = formData.get('users');
  const newTask = new Task(title, description, assignedUser);

  tasksList.push(newTask);
  setDataToLocalStorage(tasksList);
  addFormElement.reset();
}

export { handleSubmitFormAdd };
