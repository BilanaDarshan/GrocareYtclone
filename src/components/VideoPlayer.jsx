import React, { useState } from 'react';
import './VideoPlayer.css'; // Import the CSS file for styling

import { FaComment, FaHeart } from 'react-icons/fa'

const VideoPlayer = ({ video }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const  title = video?.submission?.title;
  const channelName = video?.creator?.handle;
  const channelPicture = video?.creator?.pic;
  const creatorName = video?.creator?.name;
  const description = video?.submission?.description;
  const comments = video?.comment?.count;
  const reactions = video?.reaction?.count;
  const videoUrl = video?.submission?.mediaUrl;
  const externalLink = video?.submission?.hyperlink;
  
  return (
    <div className="video-player">
      <div className="video-container">
        <video className="video-element" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-details">
        <h2 className="video-title">{title}</h2>
        <div className="channel-info">
          <img className="channel-picture" src={channelPicture} alt="Channel Profile" />
          <div>
            <p className="channel-name">{channelName}</p>
            <p className="creator-name">{creatorName}</p>
          </div>
        </div>
        <div className="video-actions">
          <button className="description-toggle" onClick={toggleDescription}>
            {showDescription ? 'Hide Description' : 'Show Description'}
          </button>
          <p className="comments"><FaComment className="comment-icon" />{comments}&nbsp; &nbsp;</p>
          
          <p className="reactions"> <FaHeart className="heart-icon" /> {reactions} &nbsp;</p>
          <a className="external-link" href={externalLink} target="_blank" rel="noopener noreferrer">
            Visit My website
          </a>
        </div>
        {showDescription && <p className="video-description">{description}</p>}
      </div>
    </div>
  );
};

export default VideoPlayer;

