import React from "react";

import "./Cv.scss";
const imagePath = process.env.PUBLIC_URL + "assets/images/";

export default function Cv() {
  return (
    <div className="cv-container">
      <div className="cv">
        <div className="first-page">
          <div className="header">
            <div className="empty"></div>
            <div className="author">
              <div className="content">
                <h1>MILAN VUKOVIĆ</h1>
                <h3 className="light">JAVASCRIPT DEVELOPER</h3>
              </div>
            </div>
          </div>
          <div className="main page-break">
            <div className="info">
              <div>
                <h4>INFO</h4>
                <div>
                  <p className="light-text">PHONE</p>
                  <p className="dark-text">060.502.8000</p>
                  <p className="light-text">ADDRESS</p>
                  <p className="dark-text">Vladislava Petkovića Disa 11, Niš</p>
                  <p className="light-text">EMAIL</p>
                  <p className="dark-text">mildzan@gmail.com</p>
                  <p className="light-text">WEBSITE</p>
                  <p className="dark-text">
                    <a href="http://milan.milton-soft.com/">
                      www.milan.milton-soft.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h4>EDUCATION</h4>
                <div>
                  <p className="light-text">HIGH SCHOOL</p>
                  <p className="dark-text">Gimnazija 9.maj, Niš</p>
                  <p className="light-text">COLLEGE</p>
                  <p className="dark-text">
                    College of Applied Technical Sciences, Niš
                  </p>
                  <p className="light-text">STUDY PROGRAM</p>
                  <p className="dark-text">Modern Computer Technologies</p>
                  <p className="light-text">VOCATION</p>
                  <p className="dark-text">
                    Specialist in Electrical and Computer Engineering
                  </p>
                </div>
              </div>
              <div className="list-skills">
                <h4>SKILLS</h4>
                <p>HTML</p>
                <p>CSS</p>
                <p>Java Script</p>
                <p>TypeScript</p>
                <p>Vue</p>
                <p>React</p>
                <p>Angular</p>
                <p>Node JS</p>
              </div>
            </div>

            <div className="about">
              <div>
                <h4>ABOUT</h4>
                <p>
                  Responsible and very professional, not being arrogant, listen
                  to others, having patience and good focus, love of learning
                  and passion for what I do.
                </p>
              </div>

              <div>
                <h4>EXPERIANCE</h4>
                <div>
                  <p>
                    A long time worked as a system administrator,very good
                    knowledge of OS (Win, Linux), security (Firewall, Proxy),
                    DHCP, DNS, Email and Web servers. Worked one some internal
                    desktop and web aplications (Visual Basic, php and MySql),
                    maintaing some CMS sites. Works with Corel Draw, Adobe
                    Illustrator, Photoshop, Gimp, ArchiCad, AutoCad ...
                  </p>
                  <p>
                    The last 3 years worked on various projects based on
                    JavaScript, Angular, MongoDB and NodeJS. In order to
                    complete my work successfully, I’m using a lot of different
                    frameworks and third-party tools like Bootstrap,
                    Materialize.css, Tailwind.css, Sass, Susy, Gulp, Moment.js,
                    Bcrypt.js, Express, Mongoose, WebSocket and Passport.
                  </p>
                  <p>
                    Later my focus was on Vue and all features that come with
                    him. It was a very pleasant experience and I like the way
                    how Vue works comparing to Angular.
                  </p>
                  <p>
                    I move then to React. Worked with class and functional
                    components, Redux. React hooks then came out, and I migrate
                    to functional components with all available hooks.
                  </p>
                  <p>
                    Very strong knowledge of HTML, CSS, JavaScript and
                    TypeScript, all major frameworks: React, Angular and Vue.
                    Familiar with MongoDB, Firebase, GraphQL, SQL, Web
                    Components and Jest.
                  </p>
                  <p>
                    Made some sites from scratch, frontend and backend.
                    Understand the whole process of building an application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="single-project table">
          <p>Project</p>
          <p className="description">Description</p>
          <p>link</p>
        </div>
        <div className="single-project">
          <h5>Shop</h5>
          <div className="description">
            <p>Shop model</p>
            <p>React, React Hooks, useContext for storing data, Firebase.</p>
          </div>
          <div>
            <a href="http://frontend.milton-soft.com/react/shop/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Weather App</h5>
          <div className="description">
            <p>Yahoo Weather App</p>
            <p>Resposnive React app, React Hooks, Node.js.</p>
          </div>
          <div>
            <a href="http://weather-nis.herokuapp.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Aplication for Generali insurance</h5>
          <div className="description">
            <p>
              Insurance agents manage their clients and all necessary
              information.
            </p>
            <p>
              Angular, Bootstrap, Moment.js, Angular2-Flash-Messages, Node.js,
              Express, MongoDB, Mongoose, Passport.
            </p>
          </div>
          <div>
            <a href="https://heroku-generali.herokuapp.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Aplication for hostel</h5>
          <div className="description">
            <p>Booking site for a hostel.</p>
            <p>
              Angular, Materialize.css, Moment.js, Mydaterangepicker.js, jQuery,
              Angular2-Flash-Messages, Node.js, Express, MongoDB, Mongoose,
              Nodemailer, Passport-Google-Oauth20.
            </p>
          </div>
          <div>
            <a href="https://happystar.herokuapp.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Aplication for movie database</h5>
          <div className="description">
            <p>Managing personal (mine) movie database.</p>
            <p>
              Angular, Bootstrap, Backend: Node.js, Express, MongoDB, Mongoose,
              Mongoose-Timestamp, Passport-Facebook.
            </p>
          </div>
          <div>
            <a href="http://mildza-movies.herokuapp.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Junior Github Jobs</h5>
          <div className="description">
            <p>Display junior githubs jobs</p>
            <p>
              Node - fetch data from github jobs api, filter to match junior
              jobs and with cron refresh every hour. React - displaying jobs,
              using custom pagination and modal. IMPORTANT: refresh page after
              load, heroku put app to sleep!!!
            </p>
          </div>
          <div>
            <a href="https://junior-github-jobs.herokuapp.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>React Form Validation</h5>
          <div className="description">
            <p>React forms</p>
            <p>
              Two different forms with validation, simple and complex. Complex
              form have same inputs but can handle signin and login. useState,
              useReducer, custom Hook, custom Input and custom Button.
            </p>
          </div>
          <div>
            <a href="http://frontend.milton-soft.com/react/forms/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Vue</h5>
          <div className="description">
            <p>Vue feutures</p>
            <p>Dive into all vue futures.</p>
          </div>
          <div>
            <a href="http://frontend.milton-soft.com/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Component Comunication</h5>
          <div className="description">
            <p>Angular comunication</p>
            <p>
              Input, Output, Set-Get, NgOnChanges, Optional route parameters,
              queryParams, queryParamsHandling, custom filtering and Services.
            </p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/comunication/">live</a>
          </div>
        </div>

        <div className="single-project page-break">
          <h5>Reusable Components</h5>
          <div className="description">
            <p>Angular reusable components</p>
            <p>
              Create reusable Accordion component, ChangeDetectionStrategy,
              ChangeDetectorRef, ContentChild, HostBinding, ng-template,
              ngTemplateOutlet,.
            </p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/reusable/">live</a>
          </div>
        </div>

        <div className="single-project zoom">
          <h5>Zoom Directive</h5>
          <div className="description">
            <p>Making custom Zoom directive</p>
            <p>HostListener, Renderer2, HostBinding, Input, BehaviorSubject.</p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/zoom/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>RXJS</h5>
          <div className="description">
            <p>Diving into RXJS</p>
            <p>
              Subject, Behaviour Subject, ReplaySubject, AsyncSubject, Creation
              Operators, Transformation Operators and Combination Operators.
            </p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/observable/">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>HttpClient</h5>
          <div className="description">
            <p>Angular httpClient</p>
            <p>
              HTTP interceptors, Reading full response, Geting non-jason data,
              Progress, HandleError, Retry, HttpParams, Events.
            </p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/http">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Animation</h5>
          <div className="description">
            <p>Angular animation</p>
            <p>
              Route Transition Animation, Reusable Animation, Group method,
              Keyframes, CallBack.
            </p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/animation">live</a>
          </div>
        </div>

        <div className="single-project">
          <h5>Game</h5>
          <div className="description">
            <p>Angular game</p>
            <p>Find the randomly word from choosen topic.</p>
          </div>
          <div>
            <a href="http://angular.milton-soft.com/gameland/">live</a>
          </div>
        </div>
      </div>

      <div className="github">
        <a href="https://github.com/Mildza/">
          <img src={imagePath + "github.png"} alt="github" />
        </a>
      </div>
    </div>
  );
}
