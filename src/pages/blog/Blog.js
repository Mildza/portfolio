import React, { useState, useEffect } from "react";

import "./Blog.scss";
import Youtube from "./../../shared/Youtube/Youtube";

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
    <div className="blog">
      <Youtube video="MzlXuOmhGik" title="secret" autoplay="0" />

      <div
        className="blog-body"
        onClick={() => {
          toggle("#second");
        }}
      >
        <h2>Visual Studio Code shortcuts</h2>
        <div className="dots">...</div>
        <div id="second" className="hide">
          <p>
            <kbd>alt</kbd> + <kbd> &#x2191;</kbd> Move Line Up
          </p>
          <p>
            <kbd>alt</kbd> + <kbd> &#x2193;</kbd> Move Line Down
          </p>
          <p>
            <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd> &#x2191;</kbd> Copy Line
            up
          </p>
          <p>
            <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd> &#x2193;</kbd> Copy Line
            down
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd>enter</kbd> Insert Line Below
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd> Insert Line
            Above
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd> 0</kbd> Focus Side Bar
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd> 1</kbd> Focus First Editors Group
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd> d</kbd> Select Current
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd> e</kbd> Go To File
          </p>
          <p>
            <kbd>ctrl</kbd> + <kbd> shift</kbd> + <kbd>p</kbd> -> new file
          </p>
        </div>
      </div>
      <div
        className="blog-body indent"
        onClick={() => {
          toggle("#first");
        }}
      >
        <h2>Why React is so popular?</h2>
        <div className="dots">...</div>

        <div id="first" className="hide">
          <p>
            We have three types of programming: Procedural, Object-oriented and
            Functional programming. Angular and Vue are Class-Object oriented.
            In javascript class is not a feature it is a syntactic sugar, in the
            background a class declaration or a class expression will create a
            constructor function with the same name as the class.
          </p>
          <p>
            The most powerful feature of javaScript is First Class Functions.
            Everything we can do with other types we can do with functions.
            Assign them to variables, pass them around, create them on the fly,
            they can be anonymous.
          </p>
          <p>
            React Hooks were recently released in React version 16.8.0. They
            essentially allow for functional components to have their own local
            state and lifecycle methods, among other interesting advanced uses.
            Functional components offer better efficiency, readability, and
            practicality than class components, and future React apps will
            likely use functional components now in favor of class components.
          </p>
        </div>
      </div>
    </div>
  );
}
