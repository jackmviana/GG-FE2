import './App.css';
import Header from './Components/Header'
import { Route, Routes } from 'react-router';
import LogIn from './Auth/LogIn';
import Profile from './Components/Profile';
import Home from './Components/Home'
import Tracker from './Components/Tracker'
import Wishlist from './Components/Wishlist';
import GameDetails from './Components/GameDetails';

function App() {
  return (
    <div className=" relative App">
      
      <div className='header'>
      <Header/>
      </div>

      <div>
        <Routes>
          <Route path="/auth/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
