import React from 'react'
import Navbar from './Navbar';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
import Navbar1 from './Navbar1';

export default function Mainpage() {

  return (
    <div className='h-screen w-screen overflow-x-hidden font-serif'>
      {/* <span className='sm:hidden'> */}
      <Navbar1/>
      {/* </span> */}

      {/* Intro */}
      <Intro/>
      
      {/* About Me */}
      <AboutMe/>

      {/* Experience */}
      <Experience/>
      
      {/* Projects */}
      <Projects/>

      {/* Contact */}
      <Contact/>
      {/* <div className='bg-[#F2F5F7] w-full h-screen px-24 py-6 grid grid-cols-3'>
        <div>

        </div>
        <div className='col-span-2'>

        </div>
      </div> */}
    </div>
  )
}

