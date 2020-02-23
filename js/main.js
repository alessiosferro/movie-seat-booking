import {
  AddContainerClickEventListener,
  AddMovieSelectChangeEventListener
} from './event-listeners.js';

const seatDivElements = document.querySelectorAll(
  '.seat-row .seat:not(.seat--occupied)'
);

const Main = () => {
  AddContainerClickEventListener();
  AddMovieSelectChangeEventListener();
};

Main();
