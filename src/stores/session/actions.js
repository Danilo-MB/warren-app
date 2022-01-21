import * as types from './types';
import API from '../../services/index';

export function fetchStarted() {
  return {
    type: types.FETCH_STARTED,
  };
};

export function fetchLoginSuccess(email) {
  return {
    type: types.LOGIN_SUCCESS,
    email,
  };
};

export function fetchFailed(error) {
  return {
    type: types.FETCH_FAILED,
    error,
  };
};

export function login(email) {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(fetchStarted());
    try {
      //const response = await API.session.login(email);
      const response = email
      dispatch(fetchLoginSuccess(response));
    } catch (e) {
      dispatch(fetchFailed(e));
    }
  };
};
