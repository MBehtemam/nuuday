import * as ActionTypes from '../Actions/ActionTypes';

const defaultState = {
  isFetching: false,
  didInvalidate: false,
  err: '',
  data: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case ActionTypes.GET_USER_FAILURE:
      return {
        ...defaultState,
        didInvalidate: true,
        err: action.payload.err,
      };
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...defaultState,
        data: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
