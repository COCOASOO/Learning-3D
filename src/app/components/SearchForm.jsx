// src/app/components/SearchForm.js
import React from 'react';

export default function SearchForm({ searchTerm, setSearchTerm, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for videos..."
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
}
