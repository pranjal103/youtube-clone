// src/components/VideoCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css'; // Create VideoCard.css for styling

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link to={`/video/${video.videoId}`}>
        <img 
          className="video-card__thumbnail" 
          src={video.thumbnailUrl} 
          alt={video.title} 
        />
      </Link>
      <div className="video-card__info">
        <h3 className="video-card__title">{video.title}</h3>
        <p className="video-card__channel">{video.channelName}</p>
        <p className="video-card__views">{video.views.toLocaleString()} views</p>
      </div>
    </div>
  );
}

export default VideoCard;
