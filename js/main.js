import {
  addContainerClickEventListener,
  addMovieSelectChangeEventListener
} from './event-listeners.js';

import populateUI from './populate-user-interface.js';

function main() {
  populateUI();
  addContainerClickEventListener();
  addMovieSelectChangeEventListener();
}

main();
