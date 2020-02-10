import React from "react";

import "./Post.scss";
import Youtube from "./../../shared/Youtube/Youtube";

const IMAGE_PATH = process.env.PUBLIC_URL + "assets/images/";

const Post = ({ post, clicked }) => {
  return (
    <>
      {post.type === "text" ? (
        <div className="post" onClick={clicked}>
          <div className="post-header">
            <h2>{post.title}</h2>
            <img src={IMAGE_PATH + post.picture} alt={post.picture} />
          </div>
          <div className="dots">...</div>
          <div id={post.id} className="hide">
            <p>{post.content}</p>
          </div>
        </div>
      ) : post.type === "video" ? (
        <Youtube title={post.title} id={post.id} />
      ) : (
        <div className="post" onClick={clicked}>
          <div className="post-header">
            <h2>{post.title}</h2>
            <img src={IMAGE_PATH + post.picture} alt={post.picture} />
          </div>
          <div className="dots">...</div>
          <div
            id={post.id}
            className="hide"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Post;
