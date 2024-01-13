import React from 'react';
import BgImg from '../assets/bg-1.jpg';
import { Card, CardContent } from '@mui/material';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAngular,
  FaHtml5
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql } from 'react-icons/si';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import AngularSvg from '../assets/Angular.svg';
import NextSvg from '../assets/Next.svg';
import materialui from '../assets/materialui.svg';
import JS from '../assets/JS.svg';
import nodejsfinal from '../assets/nodejsfinal.svg';
import Spring from '../assets/Spring.svg';
import Postgresql from '../assets/Postgresql.svg';
import MongoDb from '../assets/MongoDb.svg';
import ReactNative from '../assets/ReactNative.png';
import Flutter from '../assets/Flutter.svg';
import Vue from '../assets/Vue.svg';
import Kubernetes from '../assets/Kubernetes.png';
import blockchain from '../assets/blockchain.jpg';
import Jenkins from '../assets/Jenkins.png';
import MLLogoImg from '../assets/MLLogoImg.jpg';
import AIlogo from '../assets/artificial-intelligence-logo.jpg';
import GitLogo from '../assets/git-logo.png';
import R_logo from '../assets/R_logo.png';
import Python_logo from '../assets/Python-Logo.png';
import PowerBILogo from '../assets/PowerBILogo.png';

export default function AboutMe() {
  return (
    <div
      id='about-me'
      className='relative min-h-screen bg-cover bg-center px-4 md:px-8 lg:px-12'
      style={{ backgroundImage: `url(${BgImg})` }}
    >
        <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-4 md:px-8 py-12 md:py-24 text-lg text-left font-light text-[#191D26]'>
            <div className='md:col-span-3 lg:md:col-span-3'>
              <p className='font-medium text-cyan-950 text-xl leading-relaxed'>
                ― MY BACKGROUND
              </p>
              <p className='leading-relaxed'>
                In a relatively short period of time, I've gone through various
                phases in my profession. Owing to the fact that I started my career
                by establishing a startup, through which I got to work on many
                technologies based on our clients' needs and take on multiple
                responsibilities. I have outlined some of the technologies below.
                You can also check the projects I have worked on using this link.
              </p>
            </div>
            <div className='hidden md:block py-3 md:py-0'></div>
            <div className='md:col-span-2 lg:col-span-1'>
              <p className='font-medium text-cyan-950 text-xl leading-relaxed'>
                ― SKILLS
              </p>
              <ul className='leading-relaxed list-disc md:list-none list-inside'>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Critical thinking</li>
                <li>Project management</li>
                <li>Training and Team Building</li>
              </ul>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
          <div className='mx-auto'>
          <Card sx={{ minWidth: 275, mx:'auto', height:'100%'}}>
            <CardContent>
              <p className='font-medium text-cyan-950 text-xl leading-relaxed w-full border-b-2 '>
                Web Technologies
              </p>
              <div className='flex flex-wrap space-y-2 items-center justify-center space-x-4 mt-4'>
                {/* Your icons and images go here */}
                <FaReact className='text-6xl'  color="#61DAFB" />
                <SiTypescript size={55} color="#2496ED" />
                <img src={AngularSvg} alt="SVG Image" />    
                <img src={NextSvg} alt="SVG Image" />     
                <img src={Vue} alt="SVG Image" />     
                
                <BiLogoTailwindCss size={75} color="#2496ED" />
                <FontAwesomeIcon size={75} icon={faBootstrap} style={{color: "#7e49c8"}} size="3x"/>   
                <img src={materialui} alt="SVG Image" />
                <img src={nodejsfinal} alt="SVG Image" />    
                {/* <FaNodeJs size={55} color="#8CC84B" /> */}
                <img src={JS} alt="SVG Image" />   
                <FontAwesomeIcon size={75} icon="fa-brands fa-angular" size="3x" style={{color: "#7e49c8"}}/>
                <FaJava size={75} color="#DD0031" />
                <img src={Spring} alt="SVG Image" />  
              </div>
            </CardContent>
          </Card>
          </div>
          <div className='mx-auto'>
          <Card sx={{ minWidth: 275, mx:'auto' }}>
            <CardContent>
              <p className='font-medium text-cyan-950 text-xl leading-relaxed w-full border-b-2 '>
                Other Technologies
              </p>
              <div className='flex flex-wrap space-y-2 justify-center items-center space-x-4'>
                {/* Your icons and images go here */}
                <SiMysql size={55} />   
                <img  src={Postgresql} alt="SVG Image" />    
                <img height={150} src={MongoDb} alt="SVG Image" />      
                <img src={ReactNative} className='w-36' alt="SVG Image" />
                <img src={Flutter} alt="SVG Image" />  
                <img src={Jenkins} width={125} alt="SVG Image" />     
                <img src={GitLogo} width={150} alt="SVG Image" />  
                <img src={R_logo} width={60} alt="SVG Image" />  
                <img src={Python_logo} width={100} alt="SVG Image" />   
                <img src={PowerBILogo} width={100} alt="SVG Image" />      
                
              </div>
            </CardContent>
          </Card>
          </div>
          <div className='mx-auto'>
          <Card sx={{ minWidth: 275, mx:'auto' }} className='mx-auto'>
            <CardContent>
              <p className='font-medium text-cyan-950 text-xl leading-relaxed w-full border-b-2 '>
                New Age Technologies
              </p>
              <div className='flex flex-wrap space-y-2 items-center justify-center space-x-4'>
                {/* Your icons and images go here */}
                <FaDocker size={55} color="#2496ED" />
                <img src={Kubernetes} width={175} alt="SVG Image" />   
                <img src={blockchain} width={150} alt="SVG Image" />
                <img src={MLLogoImg} width={120} alt="SVG Image" />   
                <img src={AIlogo} width={120} alt="SVG Image" />   
                
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
        <div>
            <p className='font-medium text-cyan-950 text-xl leading-relaxed capitalize py-8'>
              I consider my greatest asset to be my ability to adapt to any
              challenge that is thrown my way.
            </p>
        </div>
    </div>
  );
}
