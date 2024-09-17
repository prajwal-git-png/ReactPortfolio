import React from 'react';
const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/assets/${imageName}`;

const Projects = () => {
  return (
    <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers project_main">

        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/tic-tak-toe.png')}
              alt="Tic Tac Toe"
              className="project-img"/>
          </div>
          <h2 className="experience-sub-title project-title">Tic Tac Toe</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/Tic-tac-toe-game-', '_blank')}>
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://prajwal-git-png.github.io/Tic-tac-toe-game-/', '_blank')}>
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/weather.png')}
              alt="Weather App"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Weather</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/Weather', '_blank')}>
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://prajwal-git-png.github.io/Weather/', '_blank')}>
              Live Demo
            </button>
          </div>
        </div>

        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/to-do-list.png')}
              alt="To-Do List"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">To-Do List</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/to-do-list', '_blank')}>
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://prajwal-git-png.github.io/to-do-list/', '_blank')}>
              Live Demo
            </button>
          </div>
        </div>

        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/geminiapi.png')}
              alt="Gemini Clone"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Gemini Clone</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/Gemini-clone', '_blank')}
            >
              Github
            </button>
           
          </div>
        </div>

        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/attendance.png')}
              alt="Attendance System"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Attendance System</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/attendance-system', '_blank')}
            >
              Github
            </button>
          </div>
        </div>

        <div className="details-container color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/utiliyApp.png')}
              alt="Attendance System"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Utility App</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/utilityApp', '_blank')}
            >
              Github
            </button>
          </div>
        </div>

        <div className="details-container lastOne color-container">
          <div className="article-container">
            <img
              src={getImagePath('projects/object.png')}
              alt="Object Detection System"
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">Object Detection</h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open('https://github.com/prajwal-git-png/Object-detection-system', '_blank')}
            >
              Github
            </button>
         
          </div>
        </div>

       </div>
    </div>
    <img
      src={getImagePath('arrow.png')}
      alt="Arrow icon"
      className="icon filtered-image arrow"
      onClick={() => { window.location.href='./#contact' }}
    />
  </section>
  );
};

export default Projects;
