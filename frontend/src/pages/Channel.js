// src/pages/Channel.js
import React from 'react';
import './Channel.css'; // Optional styling

// Sample channel data
const sampleChannel = {
  channelId: "channel01",
  channelName: "Code with John",
  owner: "user01",
  description: "Coding tutorials and tech reviews by John Doe.",
  channelBanner: "https://example.com/banners/john_banner.png",
  subscribers: 5200,
  videos: [
    {
      videoId: "video01",
      title: "Learn React in 30 Minutes",
      thumbnailUrl: "https://example.com/thumbnails/react30min.png",
      views: 15200,
    },
    {
      videoId: "video02",
      title: "Advanced React Patterns",
      thumbnailUrl: "https://example.com/thumbnails/react_advanced.png",
      views: 10500,
    }
  ]
};

function Channel() {
  const channel = sampleChannel;

  return (
    <div className="channel">
      <div className="channel__banner">
        <img src={channel.channelBanner} alt={`${channel.channelName} Banner`} />
      </div>
      <div className="channel__info">
        <h2>{channel.channelName}</h2>
        <p>{channel.description}</p>
        <p>{channel.subscribers.toLocaleString()} subscribers</p>
      </div>
      <div className="channel__videos">
        <h3>Videos</h3>
        <div className="video-grid">
          {channel.videos.map(video => (
            <div key={video.videoId} className="video-card">
              <img src={video.thumbnailUrl} alt={video.title} />
              <h4>{video.title}</h4>
              <p>{video.views.toLocaleString()} views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Channel;
