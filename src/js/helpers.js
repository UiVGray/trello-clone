// Imports
import { clockDivElement } from './variables.js';

// Mehtods creation
function getTime() {
  const date = new Date();
  let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();

  clockDivElement.innerHTML = hours + ':' + minutes + ':' + seconds;
}

export {
  getTime
};
