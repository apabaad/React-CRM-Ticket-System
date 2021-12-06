import userLogin from '../../apis/loginAPI';

export const adminLogin = (data) => (dispatch) => {
  const result = await loginAPI();

  if (result.status === 'success') {
    // make user login true
    // store token in local storage
    // dispatch fetch user api
  }
};
