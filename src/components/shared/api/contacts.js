import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6404629a80d9c5c7bac69574.mockapi.io/contacts',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  console.log(data);
  return data;
};
