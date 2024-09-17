import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import './style.css';      // Import the main stylesheet
import './mediaqueries.css'; // Import the media queries stylesheet
// Import other components...
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Academic from './components/Academic';
import Projects from './components/Projects';
import Social from './components/Social';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Academic />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
