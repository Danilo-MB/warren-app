import { get } from 'lodash';

export const getIsLoading = state => get(state, 'Session.isLoading', false);
export const getUserId = state => get(state, 'Session.userId', null);
export const termsAccepted = state => get(state, 'Session.termsAccepted', false);
export const getUserObject = state => get(state, 'Session.user', {});