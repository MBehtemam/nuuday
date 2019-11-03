import { all } from 'redux-saga/effects';
import UserSaga from './UserSaga';
import UsersSaga from './UsersSaga';

export default function* rootSaga() {
  yield all([UserSaga(), UsersSaga()]);
}
