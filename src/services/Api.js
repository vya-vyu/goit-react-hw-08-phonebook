import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContactsApi = () =>
  axios.get('/contacts').then(({ data }) => {
    return data;
  });
export const addContactApi = ({ name, number }) =>
  axios.post('/contacts', { name, number }).then(({ data }) => data);

export const deleteContactApi = id =>
  axios.delete(`/contacts/${id}`).then(({ data }) => {
    return data;
  });

export const registerUserApi = ({ name, email, password }) => {
  return axios
    .post('/users/signup', { name, email, password })
    .then(({ data }) => {
      console.log(data);
      token.set(data.token);
      return data;
    });
};
export const loginUserApi = ({ email, password }) => {
  return axios.post('/users/login', { email, password }).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};
export const logOutUserApi = () => {
  return axios.post('/users/logout').then(({ data }) => {
    token.unset();
    return data;
  });
};
export const fetchCurrentUserApi = () => {
  return axios.get('/users/current').then(({ data }) => {
    console.log(data);
    return data;
  });
};
