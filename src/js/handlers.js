//Imports
import {
  editFormElement,
  deleteFormElement,
  addUserSelectElement,
  modalTitleElement,
  modalConfirmationElement,
  modalTitleInputElement,
  modalDescriptionTextareaElement,
  modalUserSelectElement,
  modalStatusSelectElement,
  userList
} from './variables.js';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  render
} from './helpers.js';
import { Task } from './models.js';
import { fillSelectTemplate } from './templates.js';

// Event handlers declaration
function handleSubmitFormAdd({ target }) {
  const tasksList = getDataFromLocalStorage();
  const { addTitle: title, addText: description, users: assignedUser } = Object.fromEntries(new FormData(target));

  tasksList.push(new Task(title, description, assignedUser));
  setDataToLocalStorage(tasksList);
  target.reset();
}

function handleClickButtonAdd() {
  addUserSelectElement.innerHTML = fillSelectTemplate(userList);
}

function handleClickButtonEdit({ target }) {
  if (target.dataset.role === 'edit') {
    const taskList = getDataFromLocalStorage();
    const targetId = target.closest('.task').dataset.id;
    const editedTask = taskList.find(item => item.id === targetId);

    editFormElement.setAttribute('data-id', targetId);
    modalTitleInputElement.value = editedTask.title;
    modalDescriptionTextareaElement.value = editedTask.description;
    modalUserSelectElement.innerHTML = fillSelectTemplate(userList, editedTask.assignedUser);
    modalStatusSelectElement.value = editedTask.status;
  }
}

function handleSubmitFormEdit({ target }) {
  const formElement = target.closest('form');
  const taskList = getDataFromLocalStorage();
  const id = editFormElement.dataset.id;
  const editedTask = taskList.find(item => item.id === id);
  const formData = new FormData(formElement);
  const taskStatus = formData.get('status');
  const inProgressList = taskList.filter(function (task) {
    return task.status === 'in-progress';
  })

  if (inProgressList.length === 6 & taskStatus === 'in-progress') {
    alert('There are unfinished tasks! Complete them first.');
    target.value = 'todo';
    return;
  } else {
    Object.assign(editedTask, {
      title: formData.get('editTitle'),
      description: formData.get('editText'),
      assignedUser: formData.get('users'),
      status: taskStatus
    });

    setDataToLocalStorage(taskList);
  }
}

function handleChangeSelectStatus({ target }) {
  if (target.dataset.role !== 'status-select') return;

  const taskList = getDataFromLocalStorage();
  const inProgressList = taskList.filter(task => task.status === 'in-progress');
  const taskId = target.closest('.task').dataset.id;
  const task = taskList.find(task => task.id === taskId);
  task.status = target.value;

  if (inProgressList.length === 6 && target.value === 'in-progress') {
    alert('There are unfinished tasks! Complete them first.');
    target.value = 'todo';
    return;
  }

  setDataToLocalStorage(taskList);
  render(getDataFromLocalStorage());
}

function handleChangeSelectUser({ target }) {
  if (target.dataset.role !== 'user-select') return;

  const taskList = getDataFromLocalStorage();
  const taskId = target.closest('.task').dataset.id;
  const task = taskList.find(task => task.id === taskId);
  task.assignedUser = target.value;

  setDataToLocalStorage(taskList);
  render(getDataFromLocalStorage());
}

function handleClickButtonRemoveTask({ target }) {
  if (target.dataset.role === 'remove-task') {
    const taskList = getDataFromLocalStorage();
    const taskId = target.closest('.task').dataset.id;
    const deletedTask = taskList.find(item => item.id === taskId);

    deleteFormElement.dataset.id = taskId;
    deleteFormElement.dataset.role = 'delete-one';
    modalTitleElement.textContent = 'Delete task';
    modalConfirmationElement.textContent = `You are going to delete the task "${deletedTask.title}", are you sure?`;
  }
}

function handleClickButtonRemoveAll({ target }) {
  if (target.dataset.role !== 'delete-all-done') return;

  deleteFormElement.dataset.role = 'delete-all';
  modalTitleElement.textContent = 'Delete all completed tasks';
  modalConfirmationElement.textContent = 'Are you sure you want to delete all completed tasks?';
}

function handleSubmitFormDeleteTask() {
  const taskList = getDataFromLocalStorage();
  const { role, id } = deleteFormElement.dataset;

  if (role === 'delete-one') {
    taskList.splice(taskList.findIndex(task => task.id === id), 1);
    setDataToLocalStorage(taskList);
  } else if (role === 'delete-all') {
    incompletedTaskList = taskList.filter(task => task.status !== 'done');
    setDataToLocalStorage(incompletedTaskList);
  }
}

export {
  handleSubmitFormAdd,
  handleClickButtonAdd,
  handleClickButtonEdit,
  handleSubmitFormEdit,
  handleChangeSelectStatus,
  handleChangeSelectUser,
  handleClickButtonRemoveTask,
  handleClickButtonRemoveAll,
  handleSubmitFormDeleteTask
};
