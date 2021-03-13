import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

const list = (offset=0, limit=20) => {
  return api
    .get(
      `?limit=${limit}&offset=${offset}`,
    );
}

const info = (url) => {
  return api.get(url);
}

export const service = {
  list,
  info
}
