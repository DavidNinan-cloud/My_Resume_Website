import React from 'react';
import ProfileImg from '../assets/cv image.png';
import EmailButton from './EmailButton';

export default function Intro() {
  return (
    <div className='bg-[#F2F5F7] max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 py-6 sm:px-8 lg:px-24'>

      {/* Left Section */}
      <div className='col-span-2 lg:col-span-3 h-fit my-auto space-y-8 sm:pr-4 lg:pr-0'>

        <div className='font-Playfair text-xl lg:text-5xl font-semibold text-left tracking-wide'>
          <p className='leading-snug'>
            Hello World, I am David Ninan,
          </p>
          <p className='leading-snug'>
            A Data Scientist with Entrepreneurial Spirit.
          </p>
        </div>

        <div className='flex justify-start'>
          <div className='text-[#53528E]'>
            <ul className='flex space-x-6 pt-2'>
              <li className='border-r-2 border-black pr-4'>
                <EmailButton />
              </li>
              <li className='hover:underline my-auto line-through'>info@davidninan.com</li>
            </ul>
          </div>
        </div>

        <div className='text-[#53528E]'>
          <ul className='flex space-x-6 pt-2'>
            <li className='border-r-2 border-black pr-4'>
              <a id='component-id' href="https://www.linkedin.com/in/david-ninan-OO7/" target="_blank" rel="noopener noreferrer" className='hover:underline '>Linkedin</a>
            </li>
            <li className='border-r-2 border-black pr-4'><a href="" className='hover:underline'>Twitter</a></li>
            <li><a href="" className='hover:underline'>Biyn-Enterprises</a></li>
          </ul>
        </div>

      </div>

      {/* Right Section */}
      <div id='profil-img' className='col-span-1 sm:col-span-2 lg:col-span-2 flex py-4 sm:py-8 lg:py-16'>
        <img
          src={ProfileImg}
          className='object-scale-down w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto sm:mx-0 lg:ml-auto rounded-3xl shadow-2xl'
          alt='Profile'
        />
      </div>
    </div>
  );
}
