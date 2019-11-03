import * as ActionTypes from './ActionTypes';

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersRequested = () => ({
  type: ActionTypes.GET_USERS_REQUEST,
});

export const getUsersFailure = err => ({
  type: ActionTypes.GET_USERS_FAILURE,
  payload: {
    err,
  },
});

export const getUsersSuccess = users => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: {
    users,
  },
});
