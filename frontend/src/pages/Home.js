// src/pages/Home.js
import React from 'react';
import VideoCard from '../components/VideoCard';
import sampleVideos from '../sampleData'; // Import the sample data

function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {sampleVideos.map((video) => (
        <VideoCard key={video.videoId} video={video} />
      ))}
    </div>
  );
}

export default Home;
