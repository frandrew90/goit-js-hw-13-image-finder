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
  if (!input) {
    refs.listRef.innerHTML = '';
    return refs.loadBtnRef.classList.add('is-hidden');
  }
  api.resPage();
  refs.listRef.innerHTML = '';

  getImg();
};

const onLoadBtn = () => {
  api.incPage();
  refs.loadBtnRef.disabled = true;
  getImg();
  setTimeout(scroll, 500);
};

const scroll = () => {
  refs.loadBtnRef.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
};

const getImg = () => {
  api.fetchPic().then(data => {
    renderImg(data);
    refs.loadBtnRef.classList.remove('is-hidden');
    refs.loadBtnRef.disabled = false;
  });
};

const renderImg = ({ hits }) => {
  //   console.log(hits);
  const markup = makeMarkup(hits);
  refs.listRef.insertAdjacentHTML('beforeend', markup);
};

refs.form.addEventListener('submit', onSubmit);
refs.loadBtnRef.addEventListener('click', onLoadBtn);
// function onSubmit(e) {
//   e.preventDefault();
//   const input = e.currentTarget.elements.query.value;
//   return input;
// }
