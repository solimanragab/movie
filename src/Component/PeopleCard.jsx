import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../constant/imgPath";
import person from "../assets/person-placeholder.jpg";
export default function PeopleCard({ people }) {
  return (
    <div className="col-md-2">
      <Link to={`/person/${people.id}`}>
        <div className="w-100 h-100">
          <img
            className="w-100 h-100"
            src={people.profile_path ? imgPath(people.profile_path) : person}
            alt=""
          />
          <h4
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="start"
            title={people.name ? people.name : people.name}
          >
            {people.name ? people.name : people.name}
          </h4>
        </div>
      </Link>
    </div>
  );
}
