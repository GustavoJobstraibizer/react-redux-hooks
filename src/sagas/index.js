import { all, call, put, takeLatest } from 'redux-saga/effects';
import todoAPI from '../services/api';
import types from '../store/actions/types/todoTypes';

function* loadTodos(action) {
  debugger;
  const jsonResponse = yield call(todoAPI, action.todo);
  yield put({ type: types.SET_TODO, todo: jsonResponse });
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_TODO, loadTodos)]);
}
