import * as ActionTypes from "../Actions/ActionTypes";
import IUsersResponse from "../Interface/IUsersResponse";
import IAction from "../Interface/IAction";

const defaultState: IUsersResponse = {
  isFetching: false,
  didInvalidate: false,
  err: "",
  items: []
};

const usersReducer = (
  state = defaultState,
  action: IAction
): IUsersResponse => {
  switch (action.type) {
    case ActionTypes.GET_USERS_REQUEST:
      return {
        ...defaultState,
        isFetching: true
      };
    case ActionTypes.GET_USERS_FAILURE:
      return {
        ...defaultState,
        didInvalidate: true,
        err: action.payload.err
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...defaultState,
        items: action.payload.users
      };
    default:
      return state;
  }
};
export default usersReducer;
