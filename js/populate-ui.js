import getDataFromLocalStorage from './helpers/get-data-from-local-storage.js';
import localStorageKeys from './constants/local-storage-keys.js';
import DOMElements from './constants/DOM-elements.js';
import getSeatsNotOccupied from './helpers/get-seats-not-occupied.js';
import getSelectedSeatsIndexes from './helpers/get-selected-seats-indexes.js';
import seatClasses from './constants/seat-classes.js';

const SELECTED_SEATS = getSelectedSeatsIndexes();

export default () => {
  populateSeatsUI();
  populateMovieSelectUI();
  populateCountUI();
  populateTotalUI();
};

function populateSeatsUI() {
  if (SELECTED_SEATS !== null && SELECTED_SEATS.length > 0) {
    SELECTED_SEATS.forEach(seatIndex => {
      let seatsNotOccupied = getSeatsNotOccupied();
      let index = [...seatsNotOccupied].findIndex(
        (_, index) => index === seatIndex
      );

      if (index > -1) {
        seatsNotOccupied.item(index).classList.add(seatClasses.SELECTED);
      }
    });
  }
}

function populateMovieSelectUI() {
  let selectedMovie = getDataFromLocalStorage(localStorageKeys.MOVIE);

  DOMElements.MOVIE_SELECT_ELEMENT.selectedIndex = selectedMovie
    ? selectedMovie
    : DOMElements.MOVIE_SELECT_ELEMENT.selectedIndex;
}

const populateCountUI = () =>
  (DOMElements.COUNT.innerText = SELECTED_SEATS ? SELECTED_SEATS.length : 0);

function populateTotalUI() {
  let moviePrice = getDataFromLocalStorage(localStorageKeys.MOVIE_PRICE);

  DOMElements.TOTAL.innerText =
    (SELECTED_SEATS ? SELECTED_SEATS.length : 0) *
    (moviePrice ? moviePrice : DOMElements.MOVIE_SELECT_ELEMENT.value);
}
