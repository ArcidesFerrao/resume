import React from 'react';
import './Styles/Resume.css';
import Contact from './ResumeComponents/Contact';
import Objective from './ResumeComponents/Objective';
import Header from './ResumeComponents/Header';
import Education from './ResumeComponents/Education';
import Lingo from './ResumeComponents/Lingo';
import Experience from './ResumeComponents/Experience';

export default function Resume() {
  
  
  return (
    <div className='resume'>
        <Header />
        <Contact />
        <Experience />
        <Objective />
        <Education />
        <Lingo />
        <button className='editButton'>Edit</button>
    </div>
  )
}
