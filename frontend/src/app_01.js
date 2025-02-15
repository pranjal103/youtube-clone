import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import VideoPlayer from './pages/VideoPlayer';
import Channel from './pages/Channel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/channel/:channelId" element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;
