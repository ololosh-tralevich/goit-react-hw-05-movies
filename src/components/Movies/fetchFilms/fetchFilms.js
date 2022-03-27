import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd64900813bc44a620f627e397cffce44',
  },
});

export async function getTrendingFilms() {
  console.log('GetTrendingFilms');
  const { data } = await instance.get('/trending/all/day');
  return data;
}

export async function searchFilms(searchWord) {
  console.log('SearchFilms');
  const { data } = await instance.get('/search/movie', {
    params: {
      query: searchWord,
    },
  });
  return data;
}

export async function getFullMovieInfo(filmId) {
  console.log('GetFullInfo');
  const { data } = await instance.get(`movie/${filmId}`);
  return data;
}
