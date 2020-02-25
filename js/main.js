import {
  addContainerClickEventListener,
  addMovieSelectChangeEventListener
} from './event-listeners.js';

import populateUI from './populate-ui.js';

function main() {
  populateUI();
  addContainerClickEventListener();
  addMovieSelectChangeEventListener();
}

main();
