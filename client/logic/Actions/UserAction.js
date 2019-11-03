import * as ActionTypes from './ActionTypes';

export const getUser = ({ userId }) => ({
  type: ActionTypes.GET_USER,
  payload: {
    userId,
  },
});

export const getUserRequest = () => ({
  type: ActionTypes.GET_USER_REQUEST,
});
export const getUserFailure = err => ({
  type: ActionTypes.GET_USER_FAILURE,
  payload: {
    err,
  },
});

export const getUserSuccess = user => ({
  type: ActionTypes.GET_USER_SUCCESS,
  payload: {
    user,
  },
});
