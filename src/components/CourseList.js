import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, editCourse, removeCourse } from '../store/actions/course';

export default function CourseList() {
  const [isEditing, setEditing] = useState(false);
  const [courseId, setCourseId] = useState(null);

  const courseList = useSelector(({ courses }) => courses.data);
  const dispatch = useDispatch();
  const inputCourse = useRef();

  function handleDeleteCourse(course) {
    dispatch(removeCourse(course));
  }

  function handleEditCourse(course, index) {
    setEditing(true);
    setCourseId(index);
    inputCourse.current.value = course;
  }

  function handleAddCourse() {
    dispatch(addCourse(inputCourse.current.value));
    inputCourse.current.value = '';
    inputCourse.current.focus();
  }

  function handleUpdateCourse() {
    dispatch(editCourse(inputCourse.current.value, courseId));
    setCourseId(null);
    setEditing(false);
    inputCourse.current.value = '';
  }

  function handleCancel() {
    setEditing(false);
  }

  return (
    <>
      <ul data-testid="listCourses">
        {courseList.map((course, index) => (
          <li key={index}>
            {course}
            <button type="button" onClick={() => handleDeleteCourse(course)}>
              &times;
            </button>
            <button
              type="button"
              onClick={() => handleEditCourse(course, index)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* uncontrolled component */}
      <input type="text" ref={inputCourse} data-testid="inputCourse" />
      {isEditing ? (
        <button type="button" onClick={handleUpdateCourse}>
          Edit Course
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAddCourse}
          data-testid="btnAddCourse"
        >
          Add Course
        </button>
      )}
      {isEditing && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </>
  );
}
