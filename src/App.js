import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Cv from "./pages/cv/Cv";

import "./App.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header history={history} />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/cv">
          <Cv />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}
