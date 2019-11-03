import * as ActionTypes from '../Actions/ActionTypes';

const defaultState = {
  isFetching: false,
  didInvalidate: false,
  err: '',
  data: [],
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case ActionTypes.GET_USERS_FAILURE:
      return {
        ...defaultState,
        didInvalidate: true,
        err: action.payload.err,
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...defaultState,
        data: action.payload.users,
      };
  }
};
