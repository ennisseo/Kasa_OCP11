import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/index.css';
import App from './pages/Home/App';
import Fiche from './pages/fiche';
import About from './pages/about';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
