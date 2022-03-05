import * as types from './types';
import API from '../../services/index';

export function fetchStarted() {
  return {
    type: types.FETCH_STARTED,
  };
};

export function fetchLoginSuccess(userId) {
  return {
    type: types.LOGIN_SUCCESS,
    userId,
  };
};

export function getUserSuccess(user) {
  return {
    type: types.FETCH_USER_SUCCESS,
    user,
  };
};

export function acceptTerms() {
  return {
    type: types.ACCEPT_TERMS,
  }
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
      const response = await API.session.login(email);
      dispatch(fetchLoginSuccess(response.userId));
    } catch (e) {
      dispatch(fetchFailed(e));
    }
  };
};

export function loginWithError(email) {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      const response = await API.session.loginWithError(email);
      dispatch(fetchLoginSuccess(response));
    } catch (e) {
      dispatch(fetchFailed(e));
    }
  };
}

export function getUser(userId) {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(fetchStarted());
    try {
      const response = await API.session.fetchUser(userId);
      dispatch(getUserSuccess(response));
    } catch (e) {
      dispatch(fetchFailed(e));
    }
  };
};
