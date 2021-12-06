import axios from 'axios';

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

export default makeRequest;
