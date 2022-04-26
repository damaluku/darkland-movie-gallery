import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import "../../src/index.css";

const API_URL = "http://www.omdbapi.com?apikey=720ba167";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const { data } = await axios(`${API_URL}&s=${title}`);

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <Container>
      <h1>Darkland</h1>

      <Search>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <MySearchIcon onClick={() => searchMovies(searchTerm)} />
      </Search>

      {movies && (
        <MovieContainer>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </MovieContainer>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #212426;
  min-height: 100vh;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    background: linear-gradient(
      90deg,
      rgba(249, 211, 180, 1) 0%,
      rgba(249, 211, 180, 0) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;

    @media screen and (max-width: 400px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 4rem 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 4rem 2rem;
  }
`;

const Search = styled.div`
  width: 71%;
  margin: 4rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;

  input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    font-family: var(--font-raleway);
    font-weight: 500;
    padding-right: 1rem;

    outline: none;
    color: #a1a1a1;
    background: #1f2123;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 1.75rem;
    width: 100%;
  }
`;
const MovieContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 400px) {
    margin-top: 2rem;
  }
`;
const MySearchIcon = styled(SearchIcon)`
  color: white;
  cursor: pointer;
`;
