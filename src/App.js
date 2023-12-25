// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create-quiz" element={<CreateQuiz/>} />
        <Route path="/take-quiz/:quizId" element={<TakeQuiz/>} />
      </Routes>
    </Router>
  );
}

export default App;
