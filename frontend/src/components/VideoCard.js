// src/components/VideoCard.js
import React from 'react';
import './VideoCard.css'; // Optional: For styling

// The VideoCard component receives a video object via props.
function VideoCard({ video }) {
  return (
    <div className="video-card">
      {/* Thumbnail */}
      <img 
        src={video.thumbnailUrl} 
        alt={video.title} 
        className="video-card__thumbnail"
      />
      {/* Video Details */}
      <div className="video-card__info">
        <h3 className="video-card__title">{video.title}</h3>
        <p className="video-card__channel">Channel: {video.channelId}</p>
        <p className="video-card__views">{video.views.toLocaleString()} views</p>
      </div>
    </div>
  );
}

export default VideoCard;
