// Imports
import {
  getTime,
  render,
  getDataFromLocalStorage
} from './helpers.js';
import { addFormElement } from './variables.js';
import { handleSubmitFormAdd } from './handlers.js';

// Event listeners attachment
addFormElement.addEventListener('submit', handleSubmitFormAdd);

setInterval(getTime, 1000);
render(getDataFromLocalStorage());
