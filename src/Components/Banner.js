import async from "hbs/lib/async";
import React, { useEffect, useState } from "react";
import "../Css/Banner.css";
import axios from "../axios"
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect (() => {
              async function fetchData() {
                const request = await axios.get(requests.fetchNetflixOriginal)
                setMovie(
                  request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                  ]
                );
              }
              fetchData();
  },[])
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1 ) + "..." : string;
  }


  return (
    <header
      className="banner"
      style={{
        backgroundSize : "cover ",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition : "center center",
        objectFit : "contain"
       
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
           {truncate(movie?.overview,150)}
        </h1>

      </div>
      <div className="banner__fadeBottom">
      </div>
    </header>
  );
}

export default Banner;
