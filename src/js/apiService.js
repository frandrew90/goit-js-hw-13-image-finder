// const fetchPictures = (searchQuery, pageNum) => {
//   const URL_BASE = 'https://pixabay.com/api';
//   const API_KEY = '23295311-073afe862d674061f7939d2e4';

//   return fetch(
//     `${URL_BASE}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNum}&per_page=12&key=${API_KEY}`,
//   )
//     .then(res => res.json())
//     .then(data => {
//       if (data.status === 404) {
//         return Promise.reject('Not found');
//       }
//       console.log(data);
//       return data;
//     });
// };

// export default fetchPictures;

export default class ApiService {
  #API_KEY = '23295311-073afe862d674061f7939d2e4';

  URL_BASE = 'https://pixabay.com/api/';

  constructor() {
    this.q = '';
    this.page = 1;
  }

  fetchPic() {
    const queryParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.q,
      page: this.page,
      per_page: 12,
      key: this.#API_KEY,
    });

    return fetch(`${this.URL_BASE}?${queryParams}`).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Sorry! Something went wrong!');
    });
  }

  incPage() {
    this.page += 1;
  }

  resPage() {
    this.page = 1;
  }
}
