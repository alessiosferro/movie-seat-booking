import seatClasses from '../constants/seat-classes.js';

export default () => {
  return document.querySelectorAll(
    `.${seatClasses.ROW} .${seatClasses.SELECTED}`
  );
};
