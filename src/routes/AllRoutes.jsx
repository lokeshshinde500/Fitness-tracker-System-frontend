import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Workout from "../pages/Workout";
import Goal from "../pages/Goal";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Navbar />
            </PrivateRoutes>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="workout" element={<Workout />} />
          <Route path="goal" element={<Goal />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
