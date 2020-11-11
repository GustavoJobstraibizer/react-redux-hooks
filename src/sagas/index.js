import { all, call, put, takeLatest } from 'redux-saga/effects';
import todoAPI from '../services/api';
import types from '../store/actions/types/todoTypes';

function* loadTodos(action) {
  const jsonResponse = yield call(todoAPI, action.id);
  yield put({ type: types.SET_TODO, todo: jsonResponse });
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_TODO, loadTodos)]);
}
