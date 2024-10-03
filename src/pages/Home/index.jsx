import React, { useContext } from "react";
import "./style.css";

import { ContextMovies } from "../Store";
import MovieCard from "../../Component/MovieCard";
import PeopleCard from "../../Component/PeopleCard";
import TvCard from "../../Component/TvCard";
export default function Home() {
  let { movies, people, tv } = useContext(ContextMovies);
  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title">
              Trending <br /> Movies <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending Movies by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {Array.isArray(movies) &&
          movies.length &&
          movies
            .slice(0, 10)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      {/* sec */}
      <div className="row mt-5 g-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title">
              Trending <br /> People <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending People by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {Array.isArray(people) &&
          people.length &&
          people
            .slice(0, 10)
            .map((people) => <PeopleCard key={people.id} people={people} />)}
      </div>
      {/* sec */}
      <div className="row mt-5 g-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title">
              Trending <br /> TV <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending Tv by Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {Array.isArray(tv) &&
          tv.length &&
          tv.slice(0, 10).map((tv) => <TvCard key={tv.id} tv={tv} />)}
      </div>
    </>
  );
}
