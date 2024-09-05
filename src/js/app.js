// Imports
import { Modal } from 'bootstrap';
import {
  addFormElement,
  editFormElement,
  deleteFormElement,
  boardSectionElement
} from './variables.js';
import {
  getTime,
  render,
  getDataFromLocalStorage
} from './helpers.js';
import {
  handleSubmitFormAdd,
  handleClickButtonEdit,
  handleSubmitFormEdit,
  handleChangeSelectStatus,
  handleClickButtonRemoveTask,
  handleClickButtonRemoveAll,
  handleSubmitFormDeleteTask
} from './handlers.js';

// Event listeners attachment
addFormElement.addEventListener('submit', handleSubmitFormAdd);
boardSectionElement.addEventListener('click', handleClickButtonEdit);
editFormElement.addEventListener('submit', handleSubmitFormEdit);
boardSectionElement.addEventListener('change', handleChangeSelectStatus);
boardSectionElement.addEventListener('click', handleClickButtonRemoveTask);
boardSectionElement.addEventListener('click', handleClickButtonRemoveAll);
deleteFormElement.addEventListener('submit', handleSubmitFormDeleteTask);

setInterval(getTime, 1000);
render(getDataFromLocalStorage());
