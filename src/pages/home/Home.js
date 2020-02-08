import React from "react";
import "./Home.scss";

const IMAGE_PATH = process.env.PUBLIC_URL + "assets/images/";

export default function Home() {
  return (
    <div className="home">
      <div className="grid">
        <div className="col-1">
          <p>I am in love with JavaScript and all his children.</p>
          <p>
            Long time works in Angular, then try Vue and that was an amazing
            experience. Vue gives much freedom then Angular.
          </p>
          <p>
            At some point in time, I look eye to eye with React. First
            impressions were not so good. Missing some functionalities like
            two-way data binding, template directives if and for, styling and
            others that Angular and Vue have it.
          </p>
          <p>
            More time I spent with React I more love it. React gives much more
            freedom and creativity to do and solve tasks. With React hooks we
            get all we need.
          </p>
        </div>
        <div className="col-2">
          <img src={IMAGE_PATH + "mv.png"} alt="" />
        </div>
        <div className="col-3">
          <p>
            On the other side, I spent a lot of time with HTML and CSS. Worked
            in many frameworks like Bootstrap, Materialize, Susy and Tailwind.
            They are easy to implement and we have a lot of stuff out of the
            box.
          </p>
          <p>But now the most pleasure gives me CSS.grid, Flex, and Sass.</p>

          <p>
            What about backend? Luckily we have JavaScript on the server,
            Node.js. We can use the same language on both sides, browser and
            server.
          </p>
          <p>
            We want persistent data, MongoDB is a fine solution with help of
            GraphQL.
          </p>
        </div>
      </div>

      <div className="home-about">
        <h3>Some words about me ...</h3>
        <p>I love technology, hardware and software.</p>
        <p>
          I love competitions, playing basketball, volleyball, football, table
          tennis, darts and cards.
        </p>
        <p>
          I enjoy watching movies and sports, listening to music. Love to
          travel, to see new places, meet new people.
        </p>
      </div>
    </div>
  );
}
