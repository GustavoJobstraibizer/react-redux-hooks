import React from "react";
import { Provider } from "react-redux";
import CourseList from "./components/CourseList";
import Header from "./components/Header";
import Product from "./components/Product";
import SelectItem from "./components/SelectItem";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <CourseList />
        <Product />
        <SelectItem />
      </div>
    </Provider>
  );
}

export default App;
