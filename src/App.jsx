import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Clapperboard } from 'lucide-react';
import NavBar from './components/NavBar.jsx';
import StreamList from './pages/StreamList.jsx';
import Placeholder from './pages/Placeholder.jsx';

export default function App() {
  return (
    <div className="shell">
      <header className="site-header"><div className="topbar"><div className="brand"><Clapperboard size={27} aria-hidden="true"/><div><strong>StreamList</strong><span>by EZTechMovie</span></div></div><span className="top-note">Plan the perfect movie night</span></div><NavBar/></header>
      <main id="main"><Routes><Route path="/" element={<StreamList/>}/><Route path="/movies" element={<Placeholder/>}/><Route path="/cart" element={<Placeholder/>}/><Route path="/about" element={<Placeholder/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></main>
      <footer>© EZTechMovie · INT499 Capstone · Week 1</footer>
    </div>
  );
}
