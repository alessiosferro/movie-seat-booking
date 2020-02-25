import updateSelectedCount from './helpers/update-selected-count.js';
import updateLocalStorage from './helpers/update-local-storage.js';
import localStorageKeys from './constants/local-storage-keys.js';
import DOMElements from './constants/DOM-elements.js';
import seatClasses from './constants/seat-classes.js';

export function addContainerClickEventListener() {
  DOMElements.MOVIE_CONTAINER.addEventListener('click', e => {
    e.stopPropagation();

    let { classList } = e.target;
    let ticketPrice = DOMElements.MOVIE_SELECT_ELEMENT.value;
    const { SEAT, OCCUPIED, SELECTED } = seatClasses;

    if (classList.contains(SEAT) && !classList.contains(OCCUPIED))
      classList.toggle(SELECTED);

    updateSelectedCount(ticketPrice);
  });
}

export function addMovieSelectChangeEventListener() {
  DOMElements.MOVIE_SELECT_ELEMENT.addEventListener('change', e => {
    e.stopPropagation();
    let ticketPrice = e.target.value;

    updateLocalStorage(localStorageKeys.MOVIE, e.target.selectedIndex);
    updateLocalStorage(localStorageKeys.MOVIE_PRICE, e.target.value);
    updateSelectedCount(ticketPrice);
  });
}
