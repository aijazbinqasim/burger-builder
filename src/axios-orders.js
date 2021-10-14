import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://burger-builder-app-d08ad-default-rtdb.firebaseio.com/'
});

export default axiosInstance;
