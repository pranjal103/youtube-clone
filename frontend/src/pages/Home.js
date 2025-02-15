// src/pages/Home.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import './Home.css'; // Optional styling for the Home page

// Sample video data
const sampleVideos = [
  {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    thumbnailUrl: "https://example.com/thumbnails/react30min.png",
    description: "A quick tutorial to get started with React.",
    channelName: "Code with John",
    uploader: "user01",
    views: 15200,
    likes: 1023,
    dislikes: 45,
    uploadDate: "2024-09-20",
    comments: [
      {
        commentId: "comment01",
        userId: "user02",
        text: "Great video! Very helpful.",
        timestamp: "2024-09-21T08:30:00Z"
      }
    ]
  }
];

function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <div className="home">
      <Header toggleSidebar={toggleSidebar} />
      <div className="home__body">
        <Sidebar isVisible={sidebarVisible} />
        <div className="home__content">
          <div className="video-grid">
            {sampleVideos.map(video => (
              <VideoCard key={video.videoId} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
