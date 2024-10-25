import React from "react";
import "../App.css"; // Importing the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-heading">Welcome to Our Website!</h1>
        <p className="welcome-text">
          We are thrilled to have you here! Explore our website to learn more
          about our services, read our latest blog posts, or sign up to be part
          of our community. Let your journey begin here, where creativity meets
          innovation.
        </p>
        <p className="quote">
          "The best way to predict the future is to create it." — Abraham
          Lincoln
        </p>
      </div>

      <div className="media-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RVQG04NaQj5DVVZ0XY2ZEWaCOsZrRGe3eg&s"
          alt="Welcome"
          className="welcome-image"
        />
        <img
          src="https://media.giphy.com/media/l0Hly6Ica3xE1Xlva/giphy.gif"
          alt="Creativity GIF"
          className="welcome-gif"
        />
      </div>
    </div>
  );
}

export default Home;
