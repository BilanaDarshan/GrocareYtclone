import React, { useState } from 'react';
import './VideoCard.css'; 
import VideoPlayer from './VideoPlayer';


const VideoCard = ({ video }) => {
  const  title = video?.submission?.title;
  const thumb = video?.submission?.thumbnail;
  const channelName = video?.creator?.handle;
  const channelPicture = video?.creator?.pic;
  
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleClickThumbnail = () => {
    setShowVideoPlayer(true);
  };

  if (showVideoPlayer) {
    return <VideoPlayer video={video} />;
  }

  return (
    <React.Fragment>
    <div className="video-card">
      <img className="thumbnail" src={thumb} alt="Video Thumbnail" onClick={handleClickThumbnail}/>
      <h3 className="video-title">{title}</h3>
      <div className="channel-info">
      <img className="channel-picture" src={channelPicture} alt="Channel Profile" />
      <div className="channel-name">{channelName}</div>
      </div>
      
    </div>
    </React.Fragment>
  );

};

export default VideoCard;
