import React from "react";

import "./Youtube.scss";

const Youtube = ({ video, autoplay, title }) => {
  const videoSrc =
    "https://www.youtube.com/embed/" + video + "?autoplay=" + autoplay;
  return <iframe className="player" title={title} src={videoSrc} />;
};

export default Youtube;
