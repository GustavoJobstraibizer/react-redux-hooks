import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';

const dev =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSaga();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), dev)
);

sagaMiddleware.run(sagas);

export default store;
