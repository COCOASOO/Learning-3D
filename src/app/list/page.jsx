'use client'
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PlaylistForm from '../components/PlaylistForm';
import VideoList from '../components/VideoList';
import SelectedVideosList from '../components/SelectedVideosList';
import { searchVideos, getPlaylistVideos } from '../../services/youtube';

export default function List() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchVideos = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchVideos(searchTerm);
      setVideos(data);
    } catch (err) {
      setError('Error fetching videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const extractPlaylistId = (url) => {
    const regex = /[?&]list=([^#\&\?]+)/;
    const match = url.match(regex);
    return match && match[1];
  };

  const handleGetPlaylistVideos = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const playlistId = extractPlaylistId(playlistUrl);

    if (!playlistId) {
      setError('Invalid playlist URL. Please check and try again.');
      setIsLoading(false);
      return;
    }

    try {
      const data = await getPlaylistVideos(playlistId);
      setVideos(data);
    } catch (err) {
      setError('Error fetching playlist videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const addToList = (video) => {
    setSelectedVideos((prev) => [...prev, { ...video, rating: 0 }]);
  };

  const rateVideo = (videoId, rating) => {
    setSelectedVideos((prev) =>
      prev.map((v) => (v.id.videoId === videoId ? { ...v, rating } : v))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">YouTube Video Picker</h1>
      
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSubmit={handleSearchVideos} />
      <PlaylistForm playlistUrl={playlistUrl} setPlaylistUrl={setPlaylistUrl} onSubmit={handleGetPlaylistVideos} />

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <VideoList videos={videos} addToList={addToList} />
      <h2 className="text-2xl font-bold mb-4">Selected Videos</h2>
      <SelectedVideosList selectedVideos={selectedVideos} rateVideo={rateVideo} />
    </div>
  );
}
