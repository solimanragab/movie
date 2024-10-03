import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../constant/imgPath";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-2">
      <Link
        to={`/movie/${movie.id}`}
        onClick={() => {
          localStorage.setItem("Type", "movie");
        }}
      >
        <div className="w-100">
          <img className="w-100" src={imgPath(movie.poster_path)} alt="" />
          <h4
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="start"
            title={movie.title ? movie.title : movie.name}
          >
            {movie.title ? movie.title : movie.name}
          </h4>
        </div>
      </Link>
    </div>
  );
}
