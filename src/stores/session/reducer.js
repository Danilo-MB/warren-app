import produce from 'immer';
import { initialState } from './initialState';
import * as types from './types';

const Session = (state = initialState, action) =>
  produce(state, draft => {
    draft.lastActivityTimestamp = new Date();
    switch (action.type) {
      /** PAGE * */
      case types.FETCH_STARTED:
        draft.loading = true;
        break;
      case types.ACCEPT_TERMS:
        draft.termsAccepted = true;
        break;
      case types.FETCH_USER_SUCCESS:
        draft.loading = false;
        draft.user = action.user;
        break;
      case types.LOGIN_SUCCESS:
        draft.loading = false;
        draft.userId = action.userId;
        break;
      case types.FETCH_FAILED:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
});

export default Session;