import { combineReducers } from 'redux';
import actions from './actions';
import courses from './courses';
import items from './items';
import todo from './todo';

export default combineReducers({
  courses,
  actions,
  items,
  todo,
});
