import axios from 'axios';

const rootAPI = process.env.REACT_APP_ROOT_API;

const makeRequest = async (obj) => {
  try {
    const { data } = await axios(obj);
    return data;
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
    };
  }
};

export const userRegisterAPI = async (obj) => {
  const axiosObj = {
    method: 'post',
    url: rootAPI + '/admin-user',
    data: obj,
  };
  const data = await makeRequest(axiosObj);
  return data;
};
