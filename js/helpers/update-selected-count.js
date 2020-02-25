import updateLocalStorage from './update-local-storage.js';
import localStorageKeys from '../constants/local-storage-keys.js';
import DOMElements from '../constants/DOM-elements.js';
import getSelectedSeats from './get-selected-seats.js';
import getSeatsNotOccupied from './get-seats-not-occupied.js';

export default ticketPrice => {
  let selectedSeatsIndexes = getSeats();
  let selectedSeatsCount = selectedSeatsIndexes.length;

  updateLocalStorage(localStorageKeys.SEATS, selectedSeatsIndexes);
  updateCountElement(selectedSeatsCount);
  updateTotalElement(selectedSeatsCount, ticketPrice);
};

const getSeats = () =>
  [...getSelectedSeats()].map(seat => [...getSeatsNotOccupied()].indexOf(seat));

const updateCountElement = selectedSeatsCount =>
  (DOMElements.COUNT.innerText = selectedSeatsCount);

const updateTotalElement = (selectedSeatsCount, ticketPrice) =>
  (DOMElements.TOTAL.innerText = selectedSeatsCount * ticketPrice);
