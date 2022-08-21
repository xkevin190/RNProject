import axios from 'axios';

export type Request = {
  url: string;
  query: string;
};

export const APIService = async ({url, query}: Request) => {
  return axios.get(url, {
    params: {query: query},
    headers: {
      Authorization:
        'Client-ID a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa',
    },
  });
};
