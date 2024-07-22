// src/app/components/SelectedVideosList.js
import React from 'react';

export default function SelectedVideosList({ selectedVideos, rateVideo }) {
  return (
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
  );
}
