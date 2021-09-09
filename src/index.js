import './sass/styles.css';
import ApiService from './js/apiService';
import refs from './js/refs';
import makeMarkup from './templates/card.hbs';

const api = new ApiService();

const onSubmit = e => {
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
  const markup = makeMarkup(hits);
  refs.listRef.insertAdjacentHTML('beforeend', markup);
};

refs.form.addEventListener('submit', onSubmit);
refs.loadBtnRef.addEventListener('click', onLoadBtn);
