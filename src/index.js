// import './sass/main.scss';
import './sass/styles.css';
import ApiService from './js/apiService';
import refs from './js/refs';
import makeMarkup from './templates/card.hbs';

const api = new ApiService();

// console.log(api);

const onSubmit = e => {
  // `${URL_BASE}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNum}&per_page=12&key=${API_KEY}`
  e.preventDefault();
  const input = refs.form.elements.query.value;
  api.q = input;
  api.fetchPic().then(data => {
    renderImg(data);
    refs.loadBtnRef.classList.remove('is-hidden');
  });
};

const renderImg = ({ hits }) => {
  //   console.log(hits);
  refs.listRef.innerHTML = makeMarkup(hits);
};

refs.form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const input = e.currentTarget.elements.query.value;
//   return input;
// }
