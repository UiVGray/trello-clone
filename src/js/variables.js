// Variables declaration
const clockDivElement = document.querySelector('.header__clock');
const boardSectionElement = document.querySelector('.board');
const addButtonElement = document.querySelector('#add-task-button');
const addFormElement = document.querySelector('#add-form');
const editFormElement = document.querySelector('#edit-form');
const deleteFormElement = document.querySelector('#delete-form');
const addUserSelectElement = document.querySelector('#add-user-select')
const editModalElement = document.querySelector('#edit-modal');
const deleteModalElement = document.querySelector('#delete-modal');
const modalTitleInputElement = editModalElement.querySelector('#form-title-input');
const modalDescriptionTextareaElement = editModalElement.querySelector('#form-descriprion-textarea');
const modalUserSelectElement = editModalElement.querySelector('#edit-user-select');
const modalStatusSelectElement = editModalElement.querySelector('#status-select');
const modalTitleElement = deleteModalElement.querySelector('#delete-modal-title');
const modalConfirmationElement = deleteModalElement.querySelector('#delete-confirmation');
const todosDivElement = document.querySelector('#todos-box');
const inProgressDivElement = document.querySelector('#in-progress-box');
const doneDivElement = document.querySelector('#done-box');
const todosCounterHeadingElement = document.querySelector('#todos-counter');
const inProgressCounterHeadingElement = document.querySelector('#in-progress-counter');
const doneCounterHeadingElement = document.querySelector('#done-counter');

let userList = [];

function setUserList(value) {
  userList = value;
}
export {
  clockDivElement,
  boardSectionElement,
  addButtonElement,
  addFormElement,
  editFormElement,
  deleteFormElement,
  addUserSelectElement,
  modalTitleInputElement,
  modalDescriptionTextareaElement,
  modalUserSelectElement,
  modalStatusSelectElement,
  editModalElement,
  modalTitleElement,
  modalConfirmationElement,
  todosDivElement,
  inProgressDivElement,
  doneDivElement,
  todosCounterHeadingElement,
  inProgressCounterHeadingElement,
  doneCounterHeadingElement,
  userList,
  setUserList
};
