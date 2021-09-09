// import './sass/main.scss';
// import './sass/styles.css';
import ApiService from './js/apiService';
import refs from './js/refs';
import makeMarkup from './templates/card.hbs';

const api = new ApiService();

console.log(api);

const onSubmit = e => {
  // `${URL_BASE}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNum}&per_page=12&key=${API_KEY}`
  e.preventDefault();
  const input = refs.form.elements.query.value;
  const URL_BASE = 'https://pixabay.com/api/';
  //   const API_KEY = '23295311-073afe862d674061f7939d2e4';

  const queryParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    q: input,
    page: 1,
    per_page: 12,
    key: '23295311-073afe862d674061f7939d2e4',
  });

  //   console.log(`${URL_BASE}?${queryParams}`);

  fetch(`${URL_BASE}?${queryParams}`)
    .then(res => {
      return res.json();
    })
    .then(renderImg);
};

const renderImg = ({ hits }) => {
  console.log(hits);
  refs.listRef.innerHTML = makeMarkup(hits);
};

refs.form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const input = e.currentTarget.elements.query.value;
//   return input;
// }
