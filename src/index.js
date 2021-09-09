// import './sass/main.scss';
import './sass/styles.css';
import fetchPictures from './js/apiService';
import refs from './js/refs';
import makeMarkup from './templates/card.hbs';

console.log(fetchPictures('red roses', 1));

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.query.value;
  return input;
}

// console.log(input);
