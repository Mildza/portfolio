import React from "react";

import "./Cv.scss";
const imagePath = process.env.PUBLIC_URL + "assets/images/";

export default function Cv() {
  return (
    <div className="cv">
      <div className="header">
        <h1>Milan Vuković</h1>
        <h3 className="light">JAVASCRIPT DEVELOPER</h3>
      </div>
      <div className="main">
        <div className="about">
          <div>
            <h4>ABOUT</h4>
            <p>
              Responsible and very professional, not being arrogant, listen to
              others, having patience and good focus, love of learning and
              passion for what I do.
            </p>
          </div>

          <div>
            <h4>EXPERIANCE</h4>
            <div>
              <p>
                A long time worked as a system administrator, software and web
                developer. Very good knowledge of OS (Win, Linux), security
                (Firewall, Proxy), DHCP and DNS servers, Email and Web servers.
                Worked one some internal desktop and web aplications. Maintaing
                some CMS sites.
              </p>
              <p>
                The last 3 years worked on various projects based on JavaScript,
                Angular (TypeScript), MongoDB and NodeJS. In order to complete
                my work successfully, I’m using a lot of different frameworks
                and third-party tools like Bootstrap, Materialize.css,
                Tailwind.css, Sass, Susy, Gulp, Moment.js, Bcrypt.js, Express,
                Mongoose, WebSocket and Passport.
              </p>
              <p>
                These days my focus is on Vue.js and React. Familiar with Web
                Components, Jest, Jamsine, GraphQL and SQL.
              </p>
              <p>
                Very strong knowledge of HTML, CSS, JavaScript, Angular and
                TypeScript.
              </p>
              <p>
                Made some sites from scratch, frontend and backend. Understand
                the whole process of building an application.
              </p>
            </div>
          </div>
        </div>
        <div className="info">
          <div>
            <h4>EDUCATION</h4>
            <div>
              <p className="dark-text">Gimnazija 9.maj, Niš</p>
              <p className="light-text">HIGH SCHOOL</p>
              <p className="dark-text">
                College of Applied Technical Sciences, Niš
              </p>
              <p className="light-text">COLLEGE</p>
              <p className="dark-text">Modern Computer Technologies</p>
              <p className="light-text">STUDY PROGRAM</p>
              <p className="dark-text">
                Specialist in Electrical and Computer Engineering
              </p>
              <p className="light-text">VOCATION</p>
            </div>
          </div>

          <div className="">
            <h4>CONTACT</h4>
            <div>
              <p className="dark-text">060.502.8000</p>
              <p className="light-text">PHONE</p>
              <p className="dark-text">mildzan@gmail.com</p>
              <p className="light-text">EMAIL</p>
              <p className="dark-text">Vladislava Petkovića Disa 11, Niš</p>
              <p className="light-text">ADDRESS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div>
          <h4>JAVASCRIPT</h4>
          <div>
            <p>
              First Class Functions, Function Statement, Function Expression,
              Function Constructor, Objects, Prototype and Inheritance, Classes,
              Let and Constant, Fat Arrow, Rest and Spread operators,
              Destructuring arrays and objects, High order functions: Reduce,
              Map and Filter, AJAX, Promises, Async/Await, Try/Catch.
            </p>
          </div>
        </div>

        <div>
          <h4>ANGULAR</h4>
          <div>
            <p>
              NgModule, Components, Directives and Pipes (custom), Routing,
              HttpClient, Services, Input/Output, Template-driven forms and
              Reactive forms, PWA - Progressive Web Application, Angular
              Animation and Angular Material.
              <br /> RXJS - Good knowledge of Observables - Subject,
              BehaviorSubject, ReplaySubject, ASyncSubject, Creation,
              Transformation, Filtering, Combination and Conditional operators.
            </p>
          </div>
        </div>

        <div>
          <h4>TypeScript</h4>
          <div>
            <p>
              Classes - Inheritance and Constructors, Getters and Setters,
              Static Properties and Methods, Abstracted Classes, Singletons,
              Interfaces - Properties, Methods, Classes, Function types,
              Inheritance, Generics - Types, Arrays, Class, Decorators - Class,
              Method, Property and Parameter decorators.
            </p>
          </div>
        </div>

        <div>
          <h4>Vue.js</h4>
          <div>
            <p>
              Props, CallBack Functions, Event Bus, Slots, Forms and Vuelidate,
              Directives, Animations, FIlters, Mixins, Vue-Router, Vue-Resource
              and Vuex.
            </p>
          </div>
        </div>

        <div>
          <h4>React</h4>
          <div>
            <p>
              JSX, Props, PropsType, State, Functional and Class components,
              Higher Order Components, Axios, React-Router, Redux and React
              Hooks - useEffect, useState, useReducer, useContext, useRef,
              useCallback.
            </p>
          </div>
        </div>
        <div className="page-break">
          <h4>Node.js</h4>
          <div>
            <p>
              Express, Mongoose, Express-Validator, Nodemailer, Passport
              (Google-Oauth20, Passport-Facebook), Bcrypt.js, uuid.
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <h4>Projects</h4>
        <div className="single-project">
          <h5>
            Aplication for Generali insurance -
            <a href="https://heroku-generali.herokuapp.com/">live</a>
          </h5>
          <p>
            Angular, Bootstrap, Moment.js, Angular2-Flash-Messages, Node.js,
            Express, MongoDB, Mongoose, Passport.
          </p>
          <p>
            Description: Insurance agents manage their clients and all necessary
            information.
          </p>
        </div>
        <div className="single-project">
          <h5>
            Aplication for hostel -
            <a href="https://happystar.herokuapp.com/">live</a>
          </h5>
          <p>
            Angular, Materialize.css, Moment.js, Mydaterangepicker.js, jQuery,
            Angular2-Flash-Messages, Node.js, Express, MongoDB, Mongoose,
            Nodemailer, Passport-Google-Oauth20.
          </p>
          <p>Description: Booking site for a hostel.</p>
        </div>
        <div className="single-project">
          <h5>
            Aplication for movie database -
            <a href="http://mildza-movies.herokuapp.com/">live</a>
          </h5>
          <p>
            Angular, Bootstrap, Backend: Node.js, Express, MongoDB, Mongoose,
            Mongoose-Timestamp, Passport-Facebook.
          </p>
          <p>Description: Managing personal movie database.</p>
        </div>
        <div className="single-project">
          <h5>
            Junior Github Jobs -
            <a href="https://junior-github-jobs.herokuapp.com/">live</a>
          </h5>
          <p>
            Node - fetch data from github jobs api, filter to match junior jobs
            and with cron refresh every hour. React - displaying jobs, using
            custom pagination and modal.
          </p>
          <p>IMPORTANT: refresh page after load, heroku put app to sleep!!!</p>
        </div>
        <div className="single-project">
          <h5>
            React Form Validation -
            <a href="http://frontend.milton-soft.com/react/forms/">live</a>
          </h5>
          <p>
            Two different forms with validation, simple and complex. Complex
            form have same inputs but can handle signin and login. useState,
            useReducer, custom Hook, custom Input and custom Button.
          </p>
        </div>
        <div>
          <h5>
            Vue -<a href="http://frontend.milton-soft.com/">live</a>
          </h5>
          <p>Description: All Vue feutures.</p>
        </div>
        <div>
          <div>
            <h5>
              Component Comunication -
              <a href="http://angular.milton-soft.com/comunication/">live</a>
            </h5>
            <p>
              Description: Angular,Input, Output, Set-Get, NgOnChanges, Optional
              route parameters, queryParams, queryParamsHandling, custom
              filtering and Services.
            </p>
          </div>
          <div>
            <h5>
              Reusable Components -
              <a href="http://angular.milton-soft.com/reusable/">live</a>
            </h5>
            <p>
              Description: Angular, Create reusable Accordion component,
              ChangeDetectionStrategy, ChangeDetectorRef, ContentChild,
              HostBinding, ng-template, ngTemplateOutlet,.
            </p>
          </div>
          <div>
            <h5>
              Zoom Directive -
              <a href="http://angular.milton-soft.com/zoom/">live</a>
            </h5>
            <p>
              Description: Making custom Zoom directive in Angular using
              HostListener, Renderer2, HostBinding, Input, BehaviorSubject.
            </p>
          </div>
          <div>
            <h5>
              RXJS -
              <a href="http://angular.milton-soft.com/observable/">live</a>
            </h5>
            <p>
              Description: Angular, Subject, Behaviour Subject, ReplaySubject,
              AsyncSubject, Creation Operators, Transformation Operators and
              Combination Operators.
            </p>
          </div>
          <div>
            <h5>
              HttpClient -<a href="http://angular.milton-soft.com/http">live</a>
            </h5>
            <p>
              Description: Angular, HTTP interceptors, Reading full response,
              Geting non-jason data, Progress, HandleError, Retry, HttpParams,
              Events.
            </p>
          </div>
          <div className="flex-column subtext projects">
            <h5>
              Animation -
              <a href="http://angular.milton-soft.com/animation">live</a>
            </h5>
            <p>
              Description: Angular, Route Transition Animation, Reusable
              Animation, Group method, Keyframes, CallBack.
            </p>
          </div>
          <div>
            <h5>
              Game -<a href="http://angular.milton-soft.com/gameland/">live</a>
            </h5>
            <p>
              Description: Angular, Game - find the randomly word from choosen
              topic.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="github">
        <a href="https://github.com/Mildza/">
          <img src={imagePath + "github.png"} alt="github" />
        </a>
      </div>
    </div>
  );
}
