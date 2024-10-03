import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let ContextMovies = createContext(0);

export function ContextMoviesProvider(props) {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [tv, setTv] = useState([]);
  let [page, setPage] = useState(1);
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  function saveDataUser() {
    if (localStorage.getItem("Token_Value") !== null) {
      let encodeToken = localStorage.getItem("Token_Value");
      let decodeToken = jwtDecode(encodeToken);
      setUserData(decodeToken);
    } else {
      setUserData(null);
    }
  }
  function logOut() {
    localStorage.removeItem("Token_Value");
    setUserData(null);
    navigate("./login");
  }
  console.log(page);
  function getMovies(type, callback) {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=c9fac173689f5f01ba1b0420f66d7093&include_adult=false&include_video=false&language=en-US&page=${page}`
      )
      .then((res) => {
        callback(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getMovies("movie", setMovies);
    getMovies("person", setPeople);
    getMovies("tv", setTv);
  }, [page]);

  return (
    <ContextMovies.Provider
      value={{
        movies,
        people,
        tv,
        setPage,
        userData,
        saveDataUser,
        logOut,
      }}
    >
      {props.children}
    </ContextMovies.Provider>
  );
}
