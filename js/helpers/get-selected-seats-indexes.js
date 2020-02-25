import getDataFromLocalStorage from './get-data-from-local-storage.js';
import localStorageKeys from '../constants/local-storage-keys.js';

export default () => {
  let seats = getDataFromLocalStorage(localStorageKeys.SEATS);
  return seats ? Array.from(seats) : null;
};
