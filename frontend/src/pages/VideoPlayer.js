// src/pages/VideoPlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css'; // Optional styling

// Sample video data (in a real app, fetch details using videoId)
const sampleVideo = {
  videoId: "video01",
  title: "Learn React in 30 Minutes",
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
};

function VideoPlayer() {
  const { videoId } = useParams();
  // In a real app, use videoId to fetch video details. Here we use sample data.
  const video = sampleVideo;

  return (
    <div className="video-player">
      <h2>{video.title}</h2>
      <div className="video-player__container">
        {/* Replace the src with an actual video URL or embed player */}
        <video width="640" height="360" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <p>{video.description}</p>
      <p>Channel: {video.channelName}</p>
      <div className="video-player__stats">
        <span>{video.views.toLocaleString()} views</span>
        <span>{video.likes} Likes</span>
        <span>{video.dislikes} Dislikes</span>
      </div>
      <div className="video-player__comments">
        <h3>Comments</h3>
        {video.comments.map(comment => (
          <div key={comment.commentId} className="comment">
            <p><strong>User {comment.userId}:</strong> {comment.text}</p>
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
