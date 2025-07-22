import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import FavoriteMovies from './pages/FavoriteMovies';
import { Routes, Route } from "react-router-dom";

function App() {
  const movieNumber = 1;

  return (
    <>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorite-movies' element={<FavoriteMovies />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
