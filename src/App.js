import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Project from './components/Projects';
import About from './components/About';
import './App.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
