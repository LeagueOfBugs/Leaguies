import axios from 'axios';

export const matchTableApi = axios.create({
  baseURL: 'https://c8f0viuza9.execute-api.us-east-2.amazonaws.com/Alpha/seed',
  headers: {
    Authorization: '',
  },
});
