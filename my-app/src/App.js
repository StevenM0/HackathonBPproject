import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import DetailedSearch from './components/pages/DetailedSearch';
import China from './components/pages/China';
import Canada from './components/pages/Canada';
import India from './components/pages/India';
import Saudi_Arabia from './components/pages/Saudi_Arabia';
import USA from './components/pages/USA';
import Russia from './components/pages/Russia';
import TotalEurope from './components/pages/TotalEurope';
import About from './components/pages/about';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/DetailedSearch' element = {<DetailedSearch/>}/>
        <Route path = '/China' element = {<China/>}/>
        <Route path = '/Canada' element = {<Canada/>}/>
        <Route path = '/India' element = {<India/>}/>
        <Route path = '/Russia' element = {<Russia/>}/>
        <Route path = '/Saudi_Arabia' element = {<Saudi_Arabia/>}/>
        <Route path = '/USA' element = {<USA/>}/>
        <Route path = '/TotalEurope' element = {<TotalEurope/>}/>
        <Route path = '/About' element = {<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
