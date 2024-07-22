// src/app/components/PlaylistForm.js
import React from 'react';

export default function PlaylistForm({ playlistUrl, setPlaylistUrl, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        value={playlistUrl}
        onChange={(e) => setPlaylistUrl(e.target.value)}
        placeholder="Enter playlist URL..."
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Get Playlist Videos
      </button>
    </form>
  );
}
