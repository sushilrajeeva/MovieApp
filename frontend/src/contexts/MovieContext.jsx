import React, { createContext, useState, useContext, useEffect, useMemo } from 'react'

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            try {
                setFavorites(JSON.parse(storedFavorites));
            } catch (err) {
                console.log("Failed to parse favorites from local storage", err);
                setFavorites([]);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => prev.some(mov => mov.id === movie.id) ? prev : [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = useMemo(() => ({
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }), [favorites]
    )



    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}