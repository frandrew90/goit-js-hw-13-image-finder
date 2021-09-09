const fetchPictures = (searchQuery, pageNum) => {
  const URL_BASE = 'https://pixabay.com/api';
  const API_KEY = '23295311-073afe862d674061f7939d2e4';
  //   return fetch(`${URL_BASE}/?key=${API_KEY}&q=${searchQuery}&image_type=photo`)
  //   let pageNum = 1;
  return fetch(
    `${URL_BASE}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNum}&per_page=12&key=${API_KEY}`,
  )
    .then(res => res.json())
    .then(data => {
      if (data.status === 404) {
        return Promise.reject('Not found');
      }
      console.log(data);
      return data;
    });
};

export default fetchPictures;

// const fetchPictures = (searchQuery, pageNum) => {
//   const URL_BASE = 'https://pixabay.com/api';
//   const API_KEY = '23295311-073afe862d674061f7939d2e4';
//   //   return fetch(`${URL_BASE}/?key=${API_KEY}&q=${searchQuery}&image_type=photo`)
//   //   let pageNum = 1;
//   return fetch(
//     `${URL_BASE}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNum}&per_page=12&key=${API_KEY}`,
//   ).then(res => {
//     if (Response.status === 404) {
//       return Promise.reject('Not Found!');
//     }
//     return res.json();

//   });
// };

// export default fetchPictures;
