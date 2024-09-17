import React from 'react';
const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/assets/${imageName}`;
const About = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        
        <h1 className="title">About Me</h1>
        <div className="section-container">
          
          <div className="about-details-container">
            <div className="about-containers">
             
              <div className="text-container">
                <p>
                  I am glad you are here! Hi, I'm Prajwal RM. I have a strong background in programming, web development that specifically focusing on building interactive & easy to use web applications. I started my journey in Tech world with AI and Machine Learning out of curiosity, as of now I work on different technologies such as Python, Java, Web development etc.
                </p>
              </div>
              
              <div className="details-container">
                <img
                  src={getImagePath('experience.png')}
                  alt="Experience icon"
                  className="icon filtered-image "
                />
                <h3>Experience</h3> <br/>
                <p> <strong>Project Management </strong><br/> Managed and led various academic projects, ensuring timely delivery and quality outcomes</p> <br/>
                
                <p> <strong>Frontend Development</strong> <br/> I have essential experience in front-end development, focusing on creating responsive websites using HTML, CSS, and JavaScript</p> <br/>
                
                <p> <strong>Backend Development</strong> <br/> I have key experience in backend development, mainly building and managing server-side applications using PHP, JavaScript, Python, and Flask </p>
              </div>
  
              <div className="details-container">
                <img
                  src={getImagePath('education.png')}
                  alt="Education icon"
                  className="icon filtered-image"
                />
                <h3>Education</h3> <br/>
                <p><strong>BCA (Bachelor of Computer Applications)</strong> <br/>Dr.CV Raman College, Davangere 2021-2024</p><br/>
                <p><strong>PUC (Pre-University College)</strong> <br/>DRM Science College, Davangere 2019-2021</p><br/>
              </div>
            </div>
          </div>
        </div>
        <img
          src={getImagePath('arrow.png')}
          alt="Arrow icon"
          className="icon filtered-image arrow"
          onClick={() => { window.location.href='./#experience' }}
        />
      </section>
  
    </>
  );
};

export default About;
