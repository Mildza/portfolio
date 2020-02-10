import React from "react";

import "./Youtube.scss";

const Youtube = ({ id, title }) => {
  const src = "https://www.youtube.com/embed/" + id;
  return (
    <iframe className="video" samesite="true" src={src} title={title}></iframe>
  );
};

export default Youtube;
