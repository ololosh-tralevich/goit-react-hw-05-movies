import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://api.themoviedb.org/',
  // https://api.themoviedb.org/?api_key=d64900813bc44a620f627e397cffce44

  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',

  // https://api.themoviedb.org/3/movie/550?api_key=d64900813bc44a620f627e397cffce44
  
  params: {
    // test: '/3/movie/550',
    api_key: 'd64900813bc44a620f627e397cffce44',
  },
});

export const fetchFilms = async () => {
  const { data } = await instance.get('', {
    // params: {
    //   test,
    //   api
    // },
  });

  return data;
};