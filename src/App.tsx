// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Listado from './pages/Listado';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </Router>
  );
};

export default App;
