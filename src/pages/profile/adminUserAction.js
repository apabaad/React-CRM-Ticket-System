import { userLogin } from '../../apis/loginAPI';
import { toast } from 'react-toastify';
import {
  isPending,
  requestFailed,
  requestSuccess,
  getProfileSuccess,
  adminLoggedIn,
  adminLoggedOut,
} from './adminUserSlice';

export const adminLogin = (data) => async (dispatch) => {
  dispatch(isPending());

  const result = await userLogin(data);

  if (result.status === 'success') {
    // make user login true
    // store token in local storage

    window.sessionStorage.setItem('accessJWT', result.accessJWT);
    window.localStorage.setItem('refreshJWT', result.refreshJWT);
    dispatch(adminLoggedIn());

    // dispatch fetch user api
  } else {
    toast.error(result.message);
    dispatch(requestFailed());
  }
};
