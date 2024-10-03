import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Tv from "./pages/Tv";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login/index";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import DestailsMovies from "./pages/Details/DestailsMovies";
import DestailsPeople from "./pages/Details/DestailsPeople";
import DestailsTv from "./pages/Details/DestailsTv";
import { ContextMovies } from "./pages/Store";
export default function App() {
  let { saveDataUser, userData, logOut } = useContext(ContextMovies);

  function ProtectedRoute(props) {
    if (localStorage.getItem("Token_Value") == null) {
      return <Navigate to={"/login"} />;
      // ro7 23l login
    } else {
      return props.children;
    }
  }
  useEffect(() => {
    saveDataUser();
  }, []);

  return (
    <div>
      <Navbar userData={userData} logOut={logOut} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="people"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route
            path="tv"
            element={
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            }
          />
          <Route
            path="movie/:id"
            element={
              <ProtectedRoute>
                <DestailsMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="person/:id"
            element={
              <ProtectedRoute>
                <DestailsPeople />
              </ProtectedRoute>
            }
          />
          <Route
            path="tv/:id"
            element={
              <ProtectedRoute>
                <DestailsTv />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login saveDataUser={saveDataUser} />} />
        </Routes>
      </div>
    </div>
  );
}
