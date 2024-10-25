import React from "react";
import "../App.css"; // Importing the CSS file for styling

function About() {
  return (
    <div className="project-container">
      <section className="intro-section">
        <h1 className="project-title">Project Overview</h1>
        <p className="project-description">
          This project is a full-stack web application that allows users to
          create, edit, and view blog posts. It includes a user authentication
          system, responsive design, and a dynamic blog management feature.
        </p>
      </section>

      <section className="details-section">
        <h2 className="section-title">Key Features</h2>
        <ul className="feature-list">
          <li>User authentication and authorization (Login/Signup)</li>
          <li>CRUD functionality for blogs (Create, Read, Update, Delete)</li>
          <li>Responsive design for mobile and desktop users</li>
          <li>Interactive Navbar with routing</li>
        </ul>
      </section>

      <section className="pages-section">
        <h2 className="section-title">Pages in the Project</h2>
        <ul className="page-list">
          <li>Home Page</li>
          <li>About Page</li>
          <li>Blog List Page</li>
          <li>Blog Create/Edit Page</li>
          <li>Login/Signup Page</li>
        </ul>
      </section>

      <section className="packages-section">
        <h2 className="section-title">Packages Used</h2>
        <ul className="package-list">
          <li>
            <b>React Router</b>: For navigation and routing between pages
          </li>
          <li>
            <b>Axios</b>: For handling API requests
          </li>
          <li>
            <b>Express.js</b>: Backend server framework
          </li>
          <li>
            <b>Mongoose</b>: MongoDB ODM for managing database
          </li>
        </ul>
      </section>

      <section className="screenshots-section">
        <h2 className="section-title">Screenshots</h2>
        <div className="screenshots">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Home Page Screenshot"
            className="screenshot"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Blog List Page Screenshot"
            className="screenshot"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Blog Create Page Screenshot"
            className="screenshot"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
