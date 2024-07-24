import React from 'react';

export default function VideoList({ videos, addToList }) {
  return (
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
  );
}
