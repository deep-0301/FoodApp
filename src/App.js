import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOder from './pages/PlaceOrder/PlaceOder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
