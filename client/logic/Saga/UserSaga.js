import { takeLatest, put, call } from 'redux-saga/effects';
import * as UserActions from '../Actions/UserAction';
import * as UserAPI from '../API/UserAPI';
import * as ActionTypes from '../Actions/ActionTypes';
function* getUser({ userId }) {
  try {
    yield put(UserActions.getUserRequest());
    const user = yield call(UserAPI.getUser({ userId }));
    yield put(UserActions.getUserSuccess(user));
  } catch (err) {
    yield put(UserActions.getUserFailure(err.message));
  }
}

function* rootSaga() {
  yield takeLatest(ActionTypes.GET_USER, getUser);
}
export default rootSaga;
