import React from 'react'
import "../../css/Favorites.css"
import { useMovieContext } from '../../contexts/MovieContext'
import MovieCard from '../MovieCard'

function Favourites() {
    const {favorites} = useMovieContext();
    if (favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    { favorites.map((movie) => (
                        <MovieCard movie={movie} key = {movie.id}></MovieCard>
                    ))}
                </div>
            </div>
        )
    }
  return (
    <div className='favorites-empty' >
        <h2>
            No Favourite movies yet...
        </h2>
        <p>
            Start adding movies to your favourites and they willl appear here.
        </p>
    </div>
  )
}

export default Favourites