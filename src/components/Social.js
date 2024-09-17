import React from 'react';
const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/assets/${imageName}`;


const Social = () => {
  return (
    <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">

        <div className="contact-info-container">
          <img
            src={getImagePath('linkedin.png')}
            alt="LinkedIn icon"
            className="icon filtered-image contact-icon"
          />
          <p><a target="_blank" href="https://www.linkedin.com/in/prajwal-rm-a57383315">LinkedIn</a></p>
        </div>
 
        <div className="contact-info-container">
          <img
            src={getImagePath('insta.png')}
            alt="Instagram icon"
            className="icon filtered-image contact-icon"/>
          <p><a target="_blank" href="https://instagram.com/im_prajwal21/">Instagram</a></p>
        </div>
        
    </div>
  </section>
  );
};

export default Social;
