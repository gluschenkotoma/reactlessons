import axios from 'axios';

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=22755596-bd5bc4dc11dbf7c870dedd292&q=${searchQuery}&image_type=photo&per_page=12&page=${page}`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchPicturesWithQuery,
};

// API key: 22755596-bd5bc4dc11dbf7c870dedd292
// https://pixabay.com/api/
// URL-строка HTTP-запроса.
