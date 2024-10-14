import React from 'react';
import About from './components/about';
import Home from './components/home';
import Booking from './components/booking'
import Flight from './components/flight'
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
  <div>
    <nav>
      <ul>
        <li><Link to="/booking">Ticket Booking</Link></li>
        <li><Link to="/flight">Flight Booking</Link></li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Home</Link></li>

      </ul>
   </nav>
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/booking' element={<Booking />}/>
      <Route path='/flight' element={<Flight />}/>



   </Routes>
  </div>
 </BrowserRouter>
);

}
export default App;

