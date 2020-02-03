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
        <div id="dialog" className="cover" onClick={handleModal}>
          <div
            className="modal-dialog"
            role="document"
            onClick={handleChildClick}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{project.name}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={imagePath + picture + ".jpg"}
                  alt=""
                  onClick={clickPicture}
                />
              </div>
              <div className="footer">
                <p>{project.description}</p>
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn btn-success">
                      Visit Site
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleModal}
                  >
                    Close
                  </button>
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
