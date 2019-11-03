import * as ActionTypes from './ActionTypes';
import * as UsersAPI from '../API/UsersAPI';
import IAction from '../Interface/IAction';
import IUser from '../Interface/IUser';
// export const getUsers = () => {
//   return dispatch => {
//     dispatch(getUsersRequested());
//     UsersAPI.getUsers()
//       .then(users => {
//         dispatch(getUsersSuccess(users));
//       })
//       .catch(err => {
//         dispatch(getUserFailure(err.message));
//       });
//   };
// };
export const getUsers = (): IAction => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersRequested = (): IAction => ({
  type: ActionTypes.GET_USERS_REQUEST,
});

export const getUsersFailure = (err: string): IAction => ({
  type: ActionTypes.GET_USERS_FAILURE,
  payload: {
    err,
  },
});

export const getUsersSuccess = (users: IUser[]): IAction => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: {
    users,
  },
});
