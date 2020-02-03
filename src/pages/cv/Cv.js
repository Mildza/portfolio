import React from "react";
import "./Cv.scss";

export default function Cv() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="header">
          <h1>Milan Vuković</h1>
          <h3 className="light">JAVASCRIPT DEVELOPER</h3>
        </div>
        <div className="flex-row">
          <div className="flex-column left-column">
            <div className="text firstRow">
              <h4>ABOUT</h4>
              <div className="subtext">
                <p>
                  Responsible and very professional, not being arrogant, listen
                  to others, having patience and good focus, love of learning
                  and passion for what I do.
                </p>
              </div>
            </div>

            <div>
              <h4>EXPERIANCE</h4>
              <div className="subtext">
                <p>
                  A long time worked as a system administrator, software and web
                  developer. Very good knowledge of OS (Win, Linux), security
                  (Firewall, Proxy), DHCP and DNS servers, Email and Web
                  servers. Worked one some internal desktop and web aplications.
                  Maintaing some CMS sites.
                </p>
                <p>
                  The last 3 years worked on various projects based on
                  JavaScript, Angular (TypeScript), MongoDB and NodeJS. In order
                  to complete my work successfully, I’m using a lot of different
                  frameworks and third-party tools like Bootstrap,
                  Materialize.css, Tailwind.css, Sass, Susy, Gulp, Moment.js,
                  Bcrypt.js, Express, Mongoose, WebSocket and Passport.
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
          <div className="flex-column right-column experiance">
            <div className="text firstRow">
              <h4>EDUCATION</h4>
              <div className="subtext">
                <p className="dark-text helper">Gimnazija 9.maj, Niš</p>
                <p className="light-text">HIGH SCHOOL</p>
                <p className="dark-text helper">
                  College of Applied Technical Sciences, Niš
                </p>
                <p className="light-text">COLLEGE</p>
                <p className="dark-text helper">Modern Computer Technologies</p>
                <p className="light-text">STUDY PROGRAM</p>
                <p className="dark-text helper">
                  Specialist in Electrical and Computer Engineering
                </p>
                <p className="light-text">VOCATION</p>
              </div>
            </div>

            <div className="text firstRow">
              <h4>CONTACT</h4>
              <div className="subtext">
                <p className="dark-text helper">060.502.8000</p>
                <p className="light-text">PHONE</p>
                <p className="dark-text helper">mildzan@gmail.com</p>
                <p className="light-text">EMAIL</p>
                <p className="dark-text helper">
                  Vladislava Petkovića Disa 11, Niš
                </p>
                <p className="light-text">ADDRESS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="js">
          <h4>JAVASCRIPT</h4>
          <div className="subtext">
            <p>
              First Class Functions, Function Statement, Function Expression,
              Function Constructor, Objects, Prototype and Inheritance, Classes,
              Let and Constant, Fat Arrow, Rest and Spread operators,
              Destructuring arrays and objects, High order functions: Reduce,
              Map and Filter, AJAX, Promises, Async/Await, Try/Catch.
            </p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="angular">
          <h4>ANGULAR</h4>
          <div className="subtext">
            <p>
              NgModule, Components, Directives and Pipes (custom), Routing,
              HttpClient, Services, Input/Output, Template-driven forms and
              Reactive forms, PWA - Progressive Web Application, Angular
              Animation and Angular Material.
            </p>
            <p>
              RXJS - Good knowledge of Observables - Subject, BehaviorSubject,
              ReplaySubject, ASyncSubject, Creation, Transformation, Filtering,
              Combination and Conditional operators.
            </p>
          </div>
        </div>

        <div className="js">
          <h4>TypeScript</h4>
          <div className="subtext">
            <p>
              Classes - Inheritance and Constructors, Getters and Setters,
              Static Properties and Methods, Abstracted Classes, Singletons,
              Interfaces - Properties, Methods, Classes, Function types,
              Inheritance, Generics - Types, Arrays, Class, Decorators - Class,
              Method, Property and Parameter decorators.
            </p>
          </div>
        </div>

        <div className="js">
          <h4>Vue.js</h4>
          <div className="subtext">
            <p>
              Props, CallBack Functions, Event Bus, Slots, Forms and Vuelidate,
              Directives, Animations, FIlters, Mixins, Vue-Router, Vue-Resource
              and Vuex.
            </p>
          </div>
        </div>

        <div className="js">
          <h4>React</h4>
          <div className="subtext">
            <p>
              JSX, Props, PropsType, State, Functional and Class components,
              Higher Order Components, Axios, React-Router, Redux and React
              Hooks.
            </p>
          </div>
        </div>
        <div className="typescript page-break">
          <h4>Node.js</h4>
          <div className="subtext">
            <p>
              Express, Express-Validator, Nodemailer, Passport (Google-Oauth20,
              Passport-Facebook), Bcrypt.js, uuid, Mongoose.
            </p>
          </div>
        </div>

        <div className="angular-projects">
          <h4 className="p-4">Projects</h4>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Aplication for Generali insurance -
            <a href="https://heroku-generali.herokuapp.com/">live</a>
          </span>
          <p>
            Angular, Bootstrap, Moment.js, Angular2-Flash-Messages, Node.js,
            Express, MongoDB, Mongoose, Passport.
          </p>
          <p>
            Description: Insurance agents manage their clients and all necessary
            information.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Aplication for hostel -
            <a href="https://happystar.herokuapp.com/">live</a>
          </span>
          <p className="mb-1">
            Angular, Materialize.css, Moment.js, Mydaterangepicker.js, jQuery,
            Angular2-Flash-Messages, Node.js, Express, MongoDB, Mongoose,
            Nodemailer, Passport-Google-Oauth20.
          </p>
          <p>Description: Booking site for a hostel.</p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Aplication for movie database -
            <a href="http://mildza-movies.herokuapp.com/">live</a>
          </span>
          <p className="mb-1">
            Angular, Bootstrap, Backend: Node.js, Express, MongoDB, Mongoose,
            Mongoose-Timestamp, Passport-Facebook.
          </p>
          <p>Description: Managing personal movie database.</p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Component Comunication -
            <a href="http://angular.milton-soft.com/comunication/">live</a>
          </span>
          <p>
            Description: Angular,Input, Output, Set-Get, NgOnChanges, Optional
            route parameters, queryParams, queryParamsHandling, custom filtering
            and Services.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Reusable Components -
            <a href="http://angular.milton-soft.com/reusable/">live</a>
          </span>
          <p>
            Description: Angular, Create reusable Accordion component,
            ChangeDetectionStrategy, ChangeDetectorRef, ContentChild,
            HostBinding, ng-template, ngTemplateOutlet,.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Zoom Directive -
            <a href="http://angular.milton-soft.com/zoom/">live</a>
          </span>
          <p>
            Description: Making custom Zoom directive in Angular using
            HostListener, Renderer2, HostBinding, Input, BehaviorSubject.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            RXJS -<a href="http://angular.milton-soft.com/observable/">live</a>
          </span>
          <p>
            Description: Angular, Subject, Behaviour Subject, ReplaySubject,
            AsyncSubject, Creation Operators, Transformation Operators and
            Combination Operators.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            HttpClient -<a href="http://angular.milton-soft.com/http">live</a>
          </span>
          <p>
            Description: Angular, HTTP interceptors, Reading full response,
            Geting non-jason data, Progress, HandleError, Retry, HttpParams,
            Events.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Animation -
            <a href="http://angular.milton-soft.com/animation">live</a>
          </span>
          <p>
            Description: Angular, Route Transition Animation, Reusable
            Animation, Group method, Keyframes, CallBack.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Game -<a href="http://angular.milton-soft.com/gameland/">live</a>
          </span>
          <p>
            Description: Angular, Game - find the randomly word from choosen
            topic.
          </p>
        </div>
        <div className="flex-column subtext projects">
          <span className="bold">
            Vue -<a href="http://frontend.milton-soft.com/">live</a>
          </span>
          <p>Description: All Vue feutures.</p>
        </div>
        <div className="hobbie">
          <h4>Hobbies and interests</h4>
          <p>
            Playing basketball, volleyball, football, table tenis, darts, cards.
            Enjoy watching movies and sports, listening music. Love to travel,
            nature.
          </p>
        </div>
      </div>

      <div className="text-center mt-2">
        <a href="https://github.com/Mildza/">
          <i className="fab fa-github fa-3x width"></i>
        </a>
      </div>
    </div>
  );
}
