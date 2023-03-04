import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
import Home from './components/pages/Home'

=======
import Home from './components/pages/Home';
import DetailedSearch from './components/pages/DetailedSearch';
>>>>>>> Stashed changes
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/DetailedSearch' element = {<DetailedSearch/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
