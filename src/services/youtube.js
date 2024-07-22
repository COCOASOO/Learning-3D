// src/services/youtube.js
export const searchVideos = async (searchTerm) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_API_URL}?part=snippet&maxResults=10&key=${process.env.NEXT_PUBLIC_API_KEY}&q=${searchTerm}&type=video`
    );
    if (!response.ok) throw new Error('Failed to fetch videos');
    const data = await response.json();
    return data.items;
  };
  
  export const getPlaylistVideos = async (playlistId) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYLIST_API_URL}?part=snippet&maxResults=50&key=${process.env.NEXT_PUBLIC_API_KEY}&playlistId=${playlistId}`
    );
    if (!response.ok) throw new Error('Failed to fetch playlist videos');
    const data = await response.json();
    return data.items.map(item => ({
      ...item,
      id: { videoId: item.snippet.resourceId.videoId }
    }));
  };
  