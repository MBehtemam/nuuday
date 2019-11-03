import { createStore, applyMiddleware, compose, AnyAction } from "redux";
// import ReduxThunk from 'redux-thunk'; // no changes here 😀

import createReduxSagaMiddleware from "redux-saga";
import rootReducers from "../Reducers";
import rootSaga from "../Saga";
const saga = createReduxSagaMiddleware();

const CreateStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(saga))
  );
  saga.run(rootSaga);
  return store;
};
export default CreateStore;
