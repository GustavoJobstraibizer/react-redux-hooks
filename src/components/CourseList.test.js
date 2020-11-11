import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import CourseList from './CourseList';

describe('Tests Add Courses to list', () => {
  const { getByTestId, getByText, container } = render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

  it('Should add new course to list', async () => {
    // render a component
    // const { getByTestId, getByText } = render(
    //   <Provider store={store}>
    //     <CourseList />
    //   </Provider>
    // );

    const textNode = 'Angular 2+';

    // search the input
    // const field = await waitFor(() => getByTestId('inputCourse'));
    const field = container.querySelector('[data-testid="inputCourse"]');

    // type on input and check assert to the value
    fireEvent.change(field, { target: { value: textNode } });
    expect(field.value).toEqual(textNode);

    // click to button to add course
    const buttonAddCourse = await waitFor(() => getByTestId('btnAddCourse'));
    const buttonWasClicked = fireEvent.click(buttonAddCourse);

    expect(buttonWasClicked).toBe(true);

    // assert if a new child node was added to the ul
    const liNode = await waitFor(() => getByText(textNode));
    expect(liNode).toBeDefined();
  });
});
