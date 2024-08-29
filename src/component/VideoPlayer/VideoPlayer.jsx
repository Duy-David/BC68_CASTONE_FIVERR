import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    import('../../assets/Video/HowFiverrWorksENSubs16x9.mp4').then(video => {
      setVideoSrc(video.default);
    });
  }, []);

  return (
    <div className="container">
      {videoSrc ? (
        <video width="100%" controls autoPlay 
        muted loop className='rounded-lg'>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
