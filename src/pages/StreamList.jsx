import React from 'react';
import { Film, Sparkles } from 'lucide-react';
import StreamForm from '../components/StreamForm.jsx';

export default function StreamList() {
  function handleAddTitle(title) {
    // Week 1 requirement: user input must be sent to the browser console.
    console.log('StreamList user input:', title);
  }

  return (
    <section className="hero">
      <div className="eyebrow"><Sparkles size={15} aria-hidden="true"/> YOUR WATCHLIST, SIMPLIFIED</div>
      <h1>Never forget what you want to <span>watch next.</span></h1>
      <p className="lead">Capture movies and shows you want to see. Your personal streaming companion starts here.</p>
      <div className="form-panel"><div className="panel-heading"><Film size={21} aria-hidden="true"/><div><h2>Add to StreamList</h2><p>Start building your watchlist</p></div></div><StreamForm onAddTitle={handleAddTitle} /></div>
      <div className="week-label"><strong>Week 1 foundation</strong><span>Navigation + React form + console output</span></div>
    </section>
  );
}
