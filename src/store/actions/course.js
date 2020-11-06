function removeCourse(course) {
  return { type: "REMOVE_COURSE", course };
}

function addCourse(course) {
  return { title: course, type: "ADD_COURSE" };
}

function editCourse(course, index) {
  return { type: "EDIT_COURSE", course, index };
}

export { removeCourse, addCourse, editCourse };
