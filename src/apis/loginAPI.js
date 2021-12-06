import axios from 'axios';
import makeRequest from './axios.helper';

const rootAPI = process.env.REACT_APP_ROOT_API;

export const userLogin = async (obj) => {
  const axiosObj = {
    method: 'post',
    url: rootAPI + '/login',
    data: obj,
  };
  const data = await makeRequest(axiosObj);
  return data;
};
