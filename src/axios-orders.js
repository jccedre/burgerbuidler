import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-70e35.firebaseio.com/',
});

export default instance;
