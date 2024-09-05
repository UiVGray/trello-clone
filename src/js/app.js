// Imports
import { Modal } from 'bootstrap';
import {
  addButtonElement,
  addFormElement,
  editFormElement,
  deleteFormElement,
  boardSectionElement,
  userList,
  setUserList
} from './variables.js';
import {
  getTime,
  render,
  getDataFromLocalStorage,
  getUserList
} from './helpers.js';
import {
  handleClickButtonAdd,
  handleSubmitFormAdd,
  handleClickButtonEdit,
  handleSubmitFormEdit,
  handleChangeSelectStatus,
  handleChangeSelectUser,
  handleClickButtonRemoveTask,
  handleClickButtonRemoveAll,
  handleSubmitFormDeleteTask
} from './handlers.js';

// Event listeners attachment
addButtonElement.addEventListener('click', handleClickButtonAdd);
addFormElement.addEventListener('submit', handleSubmitFormAdd);
boardSectionElement.addEventListener('click', handleClickButtonEdit);
editFormElement.addEventListener('submit', handleSubmitFormEdit);
boardSectionElement.addEventListener('change', handleChangeSelectStatus);
boardSectionElement.addEventListener('change', handleChangeSelectUser);
boardSectionElement.addEventListener('click', handleClickButtonRemoveTask);
boardSectionElement.addEventListener('click', handleClickButtonRemoveAll);
deleteFormElement.addEventListener('submit', handleSubmitFormDeleteTask);

getUserList('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    userList = res;
    setUserList(res);
    render(getDataFromLocalStorage());
  })

setInterval(getTime, 1000);

render(getDataFromLocalStorage());
