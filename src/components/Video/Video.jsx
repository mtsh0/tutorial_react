import React from 'react';

const Video = (props) => {

  // const videoURL = "https://www.youtube.com/embed/" + props.video.id.videoId;

  if (!props.video) {
    return (
      <div className="video col-md-8">
        動画を読み込み中...
      </div>
    );
  }

  const videoURL = "https://www.youtube.com/embed/" + props.video.id.videoId;

  return (
    <div className="video col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL} frameBorder="0" title="selectedVideo" />
      </div>
      <div className="info">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
}

export default Video;