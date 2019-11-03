import { takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../Actions/ActionTypes';
import * as UsersAction from '../Actions/UsersActions';
import * as UsersAPI from '../API/UsersAPI';
function* getUsers() {
  try {
    yield put(UsersAction.getUsersRequested());
    const users = yield call(UsersAPI.getUsers());
    yield put(UsersAction.getUsersSuccess(users));
  } catch (err) {
    yield put(UsersAction.getUsersFailure());
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.GET_USERS, getUsers);
}
export default rootSaga;
