import React from 'react';
import { Provider } from 'react-redux';
import CourseList from './components/CourseList';
import Product from './components/Product';
import SelectItem from './components/SelectItem';
import Todos from './components/Todos';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos title="Teste Todos PropType - " />
        <CourseList />
        <Product />
        <SelectItem />
      </div>
    </Provider>
  );
}

export default App;
