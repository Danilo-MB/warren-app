import { get } from 'lodash';

export const getIsLoading = state => get(state, 'Session.isLoading', false);
export const getEmail = state => get(state, 'Session.email', null);
