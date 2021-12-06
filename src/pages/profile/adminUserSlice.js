import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  response: {},
  adminUserProfile: {},
};
const adminUserSlice = createSlice({
  name: 'adminUser',
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state) => {
      state.isLoading = false;
    },
    getProfileSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.adminProfile = payload;
    },

    requestFailed: (state) => {
      state.isLoading = false;
    },

    adminLoggedIn: (state, { payload }) => {
      state.isAuth = true;
    },
    adminLoggedOut: (state, { payload }) => {
      state.isAuth = false;
    },
  },
});

const { actions, reducer } = adminUserSlice;
export const {
  isPending,
  requestFailed,
  requestSuccess,
  getProfileSuccess,
  adminLoggedIn,
  adminLoggedOut,
} = actions;

export default reducer;
