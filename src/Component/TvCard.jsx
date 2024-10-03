import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../constant/imgPath";

export default function TvCard({ tv }) {
  return (
    <div className="col-md-2">
      <Link
        to={`/tv/${tv.id}`}
        onClick={() => {
          localStorage.setItem("Type", "tv");
        }}
      >
        <div className="w-100">
          <img className="w-100" src={imgPath(tv.poster_path)} alt="" />
          <h4
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="start"
            title={tv.title ? tv.title : tv.name}
          >
            {tv.title ? tv.title : tv.name}
          </h4>
        </div>
      </Link>
    </div>
  );
}
