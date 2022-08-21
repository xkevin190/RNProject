import axios from 'axios';

export const APIService = async () => {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: {query: 'venezuela'},
    headers: {
      Authorization:
        'Client-ID a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',
    },
  });
};
