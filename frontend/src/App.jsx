import './css/App.css';
import NavBar from './components/NavBar.jsx';
import Favourites from './components/pages/Favourites.jsx';
import Home from './components/pages/Home.jsx';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext.jsx';

function App() {
  return (
    <MovieProvider>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
