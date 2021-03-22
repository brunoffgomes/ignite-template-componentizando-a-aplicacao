import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { api } from '../services/api';

interface GenreProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
}
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: [Rate];
}

interface Rate {
  Source: string;
  Value: string;
}

export function Content(props: GenreProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.genre?.id}`).then(response => {
      setMovies(response.data);
    });
  }, [props.genre?.id]);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.genre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}