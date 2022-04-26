import React from "react";
import styled from "styled-components";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <Movie>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </Movie>
  );
};

export default MovieCard;

const Movie = styled.div`
  width: 300px;
  height: 400px;
  margin: 1.5rem;

  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  div:nth-of-type(1) {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
    color: #f9d3b4;
  }

  :hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  div:nth-of-type(2) {
    width: 100%;
    height: 100%;
  }

  div:nth-of-type(2) img {
    height: 100%;
    width: 100%;
  }

  div:nth-of-type(3) {
    z-index: 2;
    background-color: #343739;
    padding: 16px 24px 24px 24px;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }

  div:nth-of-type(3) span {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f0f0f0;
  }

  div:nth-of-type(3) h3 {
    margin-top: 5px;
    font-family: "Roboto Slab", serif;
    color: #f9d3b4;
  }

  :hover div:nth-of-type(2) {
    height: 100%;
    opacity: 0.3;
  }

  :hover div:nth-of-type(3) {
    background-color: transparent;
  }

  :hover div:nth-of-type(1) {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    width: "100%";
    margin: 1rem;
  }
`;
