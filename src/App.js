import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </>
  );
}

export default App;
