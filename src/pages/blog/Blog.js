import React, { useState, useEffect } from "react";

import "./Blog.scss";
import Post from "./../../components/post/Post";
import data from "../../shared/data/blogData.json";

export default function Blog() {
  const [name, setName] = useState("");
  const [fired, setFired] = useState(false);

  const toggle = name => {
    setName(name);
    setFired(!fired);
  };

  useEffect(() => {
    if (name) {
      function swap() {
        let el = document.querySelector(name);
        let dot = el.previousSibling;

        if (el.classList.value === "hide") {
          el.classList.remove("hide");
          dot.classList.add("hide");
        } else if (el.classList.value === "") {
          el.classList.add("hide");
          dot.classList.remove("hide");
        }
      }
      swap();
    }
  }, [name, fired]);

  return (
    <div className="blog" {...console.log("button")}>
      {data.map(el => (
        <Post post={el} key={el.id} clicked={() => toggle("#" + el.id)} />
      ))}
    </div>
  );
}
