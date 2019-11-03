import * as ActionTypes from "../Actions/ActionTypes";
import IUserResponse from "../Interface/IUserResponse";
import IAction from "../Interface/IAction";

const defaultState: IUserResponse = {
  isFetching: false,
  didInvalidate: false,
  err: "",
  items: {
    address: {
      city: "",
      geo: {
        lat: "",
        lng: ""
      },
      street: "",
      suite: "",
      zipcode: ""
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: ""
    },
    email: "",
    id: -1,
    name: "",
    phone: "",
    username: "",
    website: ""
  }
};

const userReducer = (state = defaultState, action: IAction): IUserResponse => {
  switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return {
        ...defaultState,
        isFetching: true
      };
    case ActionTypes.GET_USER_FAILURE:
      return {
        ...defaultState,
        didInvalidate: true,
        err: action.payload.err
      };
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...defaultState,
        items: action.payload.user
      };
    default:
      return state;
  }
};

export default userReducer;
