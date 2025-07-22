import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "Aquaman", release_date: "2022" },
        { id: 2, title: "Titanic", release_date: "1997" },
        { id: 3, title: "Tenet", release_date: "2023" },
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" action="">
                <input type="text"
                    placeholder="Search for movies ..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;