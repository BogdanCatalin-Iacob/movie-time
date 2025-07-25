import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies()
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        // check if the query string is empty
        if (!searchQuery.trim()) return;
        // don't search while movie list is loading
        if (loading) return;
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" action="">
                <input type="text"
                    placeholder="Search for movies ..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {/* dispaly error messages if any */}
            {error && <div className="error-message">{error}</div>}

            {/* display movies if the list is loaded */}
            {loading ? (<div className="loading">Loading...</div>) : (
                <div className="movies-grid">
                    {movies.map(movie => (
                        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Home;