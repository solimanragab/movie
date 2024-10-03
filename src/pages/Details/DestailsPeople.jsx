import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { imgPath } from "../../constant/imgPath";
import { useParams } from "react-router-dom";
import person from "../../assets/person-placeholder.jpg";

export default function DestailsPeople() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  let type = window.location.pathname.includes("person") && "person";
  function getDetails() {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=c9fac173689f5f01ba1b0420f66d7093&language=eg-US`
      )
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {details != null ? (
        <div className="row">
          <div className="col-md-3">
            <img
              className="w-100 h-100"
              src={
                details.profile_path ? imgPath(details.profile_path) : person
              }
              alt=""
            />
          </div>

          <div className="col-md-8 offset-1">
            <h1>{details?.name}</h1>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
