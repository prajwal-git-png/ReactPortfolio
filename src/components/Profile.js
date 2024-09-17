 // Start of Selection
// src/components/Profile.js
import React from 'react';

const Profile = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/Resume.pdf`;
    link.download = 'Resume.pdf';
    link.click();
  };

  const handleContactInfo = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <div className="glasscon">
          <div className="circle"></div>
          <div className="glass">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="layer"></div>
          ))}
          </div>
        </div>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Prajwal</h1>
        <p className="section__text__p2">
          Welcome to my portfolio! Explore my work, skills, and accomplishments.
        </p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadCV}>Download CV</button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>Contact Info</button>
        </div>
        <div id="socials-container">
          <img src={`${process.env.PUBLIC_URL}/assets/linkedin.png`} alt="LinkedIn" className="icon" />
          <img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="Github" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
