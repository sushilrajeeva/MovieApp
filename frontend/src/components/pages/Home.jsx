import MovieCard from "../MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../../services/api";
import "../../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("loading movies from the api...");
        const loadPopularMovies = async () => {
            try {
                
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (event) => {
        
        console.log(event);
        event.preventDefault();
        if(!searchQuery.trim()){
            return;
        }
        if(loading){
            return;
        }
        setLoading(true)
        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult)
            setError(null);
        } catch (err) {
            console.log(err);
            
            setError("Failed to search movies...")
        } finally {
            setLoading(false);
        }
        setSearchQuery("")
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="search for movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">Sorry, something went wrong!!!</div>}
            
            {loading ? <div>Loading ....</div> : 
                <div className="movies-grid">
                    {
                        movies.map((movie) => (
                            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard movie={movie} key = {movie.id}></MovieCard>
                            )))}
                </div>
            }
        </div>
    )
}

export default Home;