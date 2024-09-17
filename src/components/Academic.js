import React from 'react';

const Academic = () => {
  const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/assets/${imageName}`;

  return (
    <section id="about">
      <p className="section__text__p1">Project</p>
      <h1 className="title">Academic Project</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="text-container">
              <p>
                <strong>Chatbot: </strong> Build a chatbot using external APIs that allowed the bot to work across multiple channels. API chatbots are programmed to enhance their functionality by interacting with other APIs, which allows users the ability to leverage a whole gamut of data and services in real-time. They help to pick up timely personalized interactions and automate in multiple platforms, which thereby can not only ensure great user experience but also optimize operations an inch further.
              </p>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={getImagePath('projects/AI.png')}
                  alt="AI Chatbot Project"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">AI Chatbot</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://github.com/prajwal-git-png/FINAL-YEAR-CHAT-BOT', '_blank')}>
                  Github
                </button>
              </div>
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
  );
};

export default Academic;