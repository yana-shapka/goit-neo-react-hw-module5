import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const fetchMovies = async (query, page) => {
  const {data} = await axios.get('', {
    params: {
    },
  });
  return data;
};




