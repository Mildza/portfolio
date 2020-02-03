import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Cv from "./pages/cv/Cv";

import "./App.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cv">
          <Cv />
        </Route>
      </Router>
    </div>
  );
}
