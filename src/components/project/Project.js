import React, { useState } from "react";

import "./Project.scss";
import Modal from "./../../shared/modal/Modal";

const imagePath = process.env.PUBLIC_URL + "assets/images/";

const Project = props => {
  const { name, picture } = props.project;
  const [hover, setHover] = useState(picture);
  const [open, setOpen] = useState(false);

  const hoverPicture = () => {
    setHover(picture + 2);
  };
  const leavePicture = () => {
    setHover(picture);
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="project">
        <h5>{name}</h5>
        <img
          src={imagePath + hover + ".jpg"}
          alt="name"
          onMouseEnter={hoverPicture}
          onMouseLeave={leavePicture}
          onClick={handleModal}
        />
      </div>
      <Modal project={props.project} handleModal={handleModal} open={open} />
    </>
  );
};

export default Project;
