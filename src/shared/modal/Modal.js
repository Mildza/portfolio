import React, { useState, useRef } from "react";
import "./Modal.scss";

const JobsModal = ({ open, handleModal, project }) => {
  const [rotate, setRotate] = useState(true);
  const [picture, setPicture] = useState(project.picture);
  const original = useRef(project.picture);
  const imagePath = process.env.PUBLIC_URL + "assets/images/";

  const handleChildClick = e => {
    e.stopPropagation();
  };
  const clickPicture = () => {
    rotate ? setPicture(picture + 2) : setPicture(original.current);
    setRotate(!rotate);
  };

  return (
    <>
      {open && (
        <div className="cover" onClick={handleModal}>
          <div className="dz-dialog" onClick={handleChildClick}>
            <div className="dz-content">
              <div className="dz-header">
                <h2>{project.name}</h2>
                <button
                  type="button"
                  className="dz-close"
                  onClick={handleModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="dz-body">
                <img
                  src={imagePath + picture + ".jpg"}
                  alt=""
                  onClick={clickPicture}
                />
              </div>
              <div className="dz-footer">
                <p>{project.description}</p>
                <div>
                  <div className="btn-container">
                    <div>
                      <a
                        className="button green"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                      </a>
                    </div>
                    <div>
                      <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="github"
                          src={imagePath + "github.png"}
                          alt={project.name}
                        />
                      </a>
                    </div>
                    <div>
                      <button className="button red" onClick={handleModal}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobsModal;
