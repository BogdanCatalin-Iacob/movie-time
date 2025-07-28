import './css/App.css';
import Home from './pages/Home';
import FavoriteMovies from './pages/FavoriteMovies';
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <MovieProvider>
    <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorite-movies' element={<FavoriteMovies />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
