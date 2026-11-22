import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

// Props: onAddTitle (callback supplied by the StreamList page).
export default function StreamForm({ onAddTitle }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const cleaned = title.trim();
    if (!cleaned) return;
    onAddTitle(cleaned);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <label htmlFor="stream-title">Movie or show title</label>
      <div className="field-row">
        <input id="stream-title" name="stream-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g., The Martian" autoComplete="off" maxLength={120} required />
        <button type="submit"><Plus aria-hidden="true" size={18}/><span>Add title</span></button>
      </div>
      <p className="hint">Week 1 demo: submitting prints the title in the browser's developer console.</p>
    </form>
  );
}
