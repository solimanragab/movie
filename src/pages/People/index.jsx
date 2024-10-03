import React, { useContext } from "react";
import { ContextMovies } from "../Store";
import PeopleCard from "../../Component/PeopleCard";
export default function People() {
  let { people, setPage } = useContext(ContextMovies);
  let numbers = new Array(15).fill(1).map((num, i) => i + 1);

  return (
    <div className="row">
      {Array.isArray(people) && people.length ? (
        people.map((people) => <PeopleCard key={people.id} people={people} />)
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
