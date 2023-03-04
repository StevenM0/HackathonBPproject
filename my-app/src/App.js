import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import DetailedSearch from './components/pages/DetailedSearch';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/DetailedSearch' element = {<DetailedSearch/>}/>
        <Route path='/About' element = {<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
