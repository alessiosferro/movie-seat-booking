import seatClasses from '../constants/seat-classes.js';

export default () => {
  const { SEAT, ROW, OCCUPIED } = seatClasses;

  return document.querySelectorAll(`.${ROW} .${SEAT}:not(.${OCCUPIED})`);
};
