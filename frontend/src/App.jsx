import './css/App.css';
import Home from './pages/Home';
import FavoriteMovies from './pages/FavoriteMovies';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
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
