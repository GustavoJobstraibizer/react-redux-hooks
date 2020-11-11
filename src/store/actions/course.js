import types from './types/courseTypes';

function removeCourse(course) {
  return { type: types.REMOVE_COURSE, course };
}

function addCourse(course) {
  return { title: course, type: types.ADD_COURSE };
}

function editCourse(course, index) {
  return { type: types.EDIT_COURSE, course, index };
}

export { removeCourse, addCourse, editCourse };
