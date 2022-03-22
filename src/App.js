import Home from "./pages/home/Home";
import React from "react";
import CourseContextProvider from "./hooks/context/CourseContext";

const App = () => {
  return (
    <CourseContextProvider>
      <div className="App">
        <Home />
      </div>
    </CourseContextProvider>
  );
};

export default App;
