import React from 'react';
const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/assets/${imageName}`;

const Experience = () => {
    return (<section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Programming Languages</h2>
              <div className="article-container">
  
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="Python"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
  
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="C"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>C</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
  
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="PHP"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>PHP</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
  
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="Core Java"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>Core Java</h3>
                    <p>Basic</p>
                  </div>
                </article>
  
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Web Development</h2>
              <div className="article-container">

                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="HTML5"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>Node.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="HTML5"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>React & Express JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="HTML5"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>HTML5 & CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

               
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="JavaScript"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={getImagePath('checkmark.png')}
                    alt="Git"
                    className="icon filtered-image"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={getImagePath('arrow.png')}
          alt="Arrow icon"
          className="icon filtered-image arrow"
          onClick={() => { window.location.href='./#projects' }}
        />
      </section>);
}

export default Experience;
