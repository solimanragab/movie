import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [errorMassege, setErrorMassege] = useState("");
  const [errorsMassege, setErrorsMassege] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    hash: "",
  });
  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let validate = vaildation();
    if (validate?.error) {
      setErrorsMassege(validate?.error?.details);
      console.log(validate?.error?.details);
    } else {
      axios
        .post("http://server-srta.alisoliman.net/user", formData)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          setErrorMassege(err.response.data.message);
        });
    }
  }
  function vaildation() {
    let schema = Joi.object({
      firstName: Joi.string().alphanum().min(3).max(30).required(),
      lastName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      hash: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    return schema.validate(formData, { abortEarly: false });
  }
  return (
    <div className="w-75 mx-auto my-5">
      <h1 className="text-center">Register Now</h1>
      {errorMassege.length ? (
        <h1 className="alert alert-danger h6">{errorMassege}</h1>
      ) : (
        <></>
      )}{" "}
      {errorsMassege.length > 0 &&
        errorsMassege.map((error, i) => (
          <h1 key={i} className="alert alert-danger h6">
            {error.message}
          </h1>
        ))}
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">
          Frist Name :
        </label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={getData}
          name="firstName"
        />
        <label className="form-label" htmlFor="">
          Last Name :
        </label>
        <input
          type="text"
          className="form-control mb-3"
          onChange={getData}
          name="lastName"
        />
        <label className="form-label" htmlFor="">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-3"
          name="email"
          onChange={getData}
        />
        <label className="form-label" htmlFor="">
          Password
        </label>
        <input
          type="password"
          className="form-control mb-3"
          name="hash"
          onChange={getData}
        />
        <button type="submit" className="btn btn-outline-info">
          Register
        </button>
      </form>
    </div>
  );
}
