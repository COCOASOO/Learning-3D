'use client'
import React, { useState } from 'react';

const API_KEY = 'AIzaSyB3ZfQnLkSfzfVRcpyCP0rsUplWYE6gQM4'; // Replace with your actual YouTube API key
const SEARCH_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const PLAYLIST_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVideos = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${SEARCH_API_URL}?part=snippet&maxResults=10&key=${API_KEY}&q=${searchTerm}&type=video`
      );
      if (!response.ok) throw new Error('Failed to fetch videos');
      const data = await response.json();
      setVideos(data.items);
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

  const getPlaylistVideos = async (e) => {
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
      const response = await fetch(
        `${PLAYLIST_API_URL}?part=snippet&maxResults=50&key=${API_KEY}&playlistId=${playlistId}`
      );
      if (!response.ok) throw new Error('Failed to fetch playlist videos');
      const data = await response.json();
      setVideos(data.items.map(item => ({
        ...item,
        id: { videoId: item.snippet.resourceId.videoId }
      })));
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
      
      {/* Search Form */}
      <form onSubmit={searchVideos} className="mb-4">
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

      {/* Playlist Form */}
      <form onSubmit={getPlaylistVideos} className="mb-4">
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

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Video Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {videos.map((video) => (
          <div key={video.id.videoId} className="border p-2 rounded">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full"
            />
            <h3 className="mt-2 font-bold">{video.snippet.title}</h3>
            <button
              onClick={() => addToList(video)}
              className="mt-2 p-1 bg-green-500 text-white rounded"
            >
              Add to List
            </button>
          </div>
        ))}
      </div>

      {/* Selected Videos List */}
      <h2 className="text-2xl font-bold mb-4">Selected Videos</h2>
      <div className="space-y-4">
        {selectedVideos.map((video) => (
          <div key={video.id.videoId} className="border p-2 rounded">
            <h3 className="font-bold">{video.snippet.title}</h3>
            <div className="flex items-center mt-2">
              <span className="mr-2">Rating:</span>
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => rateVideo(video.id.videoId, i + 1)}
                  className={`px-2 py-1 mx-1 rounded ${
                    video.rating >= i + 1 ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}