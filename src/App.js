import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, BrowserRouter } from 'react-router-dom';
//import './App.css';
import Dashboard from './Dashboard';
import Register from './Register';
import Profiles from './Profiles';
//import Pantries from './Pantries'; 
import Shoppings from './Shopping';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Profiles" element={<Profiles />} />
      {/*<Route path="/Pantries" element={<Pantries />} />*/}
      <Route path="/Shoppings" element={<Shoppings />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
