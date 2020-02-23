import updateSelectedCount from './helpers/update-selected-count.js';

const MOVIE_SELECT_ELEMENT = document.getElementById('movie');

export const AddContainerClickEventListener = () => {
  const movieContainerDivElement = document.querySelector('.seats-container');

  movieContainerDivElement.addEventListener('click', e => {
    e.stopPropagation();

    const { classList } = e.target;
    if (classList.contains('seat') && !classList.contains('seat--occupied'))
      classList.toggle('seat--selected');

    updateSelectedCount(Number.parseInt(MOVIE_SELECT_ELEMENT.value));
  });
};

export const AddMovieSelectChangeEventListener = () => {
  MOVIE_SELECT_ELEMENT.addEventListener('change', e => {
    e.stopPropagation();

    updateSelectedCount(Number.parseInt(MOVIE_SELECT_ELEMENT.value));
  });
};
