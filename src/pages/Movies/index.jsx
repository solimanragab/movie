import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextMovies } from "../Store";
import MovieCard from "../../Component/MovieCard";
import "./style.css";
export default function Movies() {
  let { movies, setPage } = useContext(ContextMovies);
  let numbers = new Array(15).fill(1).map((num, i) => i + 1);
  console.log(numbers);
  return (
    <div className="row">
      {Array.isArray(movies) && movies.length ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <></>
      )}
      <nav aria-label="...">
        <ul className="pagination pagination-lg my-5  d-flex justify-content-center">
          {numbers.map((num) => (
            <li
              key={num}
              className="page-item active"
              aria-current="page"
              onClick={() => setPage(num)}
            >
              <span className="page-link bg-transparent">{num}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
