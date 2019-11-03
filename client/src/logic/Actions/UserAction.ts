import * as ActionTypes from './ActionTypes';
import IAction from '../Interface/IAction';
import IUser from '../Interface/IUser';
export const getUser = ({ userId }: { userId: number }): IAction => ({
  type: ActionTypes.GET_USER,
  payload: {
    userId,
  },
});

export const getUserRequest = (): IAction => ({
  type: ActionTypes.GET_USER_REQUEST,
});
export const getUserFailure = (err: string): IAction => ({
  type: ActionTypes.GET_USER_FAILURE,
  payload: {
    err,
  },
});

export const getUserSuccess = (user: IUser): IAction => ({
  type: ActionTypes.GET_USER_SUCCESS,
  payload: {
    user,
  },
});
