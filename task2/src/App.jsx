import React from 'react';
import Navbar from './modules/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './modules/pages/Home';
import Socials from './modules/pages/Socials';
import About from './modules/pages/About'
import SignUp from './modules/pages/SignUp';
import Footer from './modules/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Socials' element={<Socials/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
