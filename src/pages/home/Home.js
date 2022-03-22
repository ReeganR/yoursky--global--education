import React from "react";
import CourseList from "../../components/courseList/CourseList";
import { PrimarySearchBar } from "../../components/primary_search_bar/PrimarySearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseDetails } from "../../components/courseDetails/CourseDetails";
import PageNotFound from "../../components/coourse404/PageNotFound";
import FormPopUp from "../../components/popUp/FormPopUp";

const Home = () => {
  return (
    <>
      <Router>
        <PrimarySearchBar />

        <Routes>
          <Route path="/yoursky--global--education" element={<FormPopUp />} />
          <Route
            path="/yoursky--global--education/list"
            element={<CourseList />}
          />
          <Route
            path="/yoursky--global--education/details/:name"
            element={<CourseDetails />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
