import React from 'react'
import ProfileImg from '../assets/cv image.png'
import EmailButton from './EmailButton';

export default function Intro() {
  return (
   
  <div className='bg-[#F2F5F7] max-w-screen grid grid-cols-5 justify-between px-24 py-6 '>
    <div className='col-span-3 h-fit my-auto space-y-8 '>
        <div className='font-Playfair sm:text-xl lg:text-5xl font-semibold text-left  tracking-wide'>
            <p className='leading-snug'>
              Hello World, I am David Ninan,
            </p>
            <p className='leading-snug'>
              A Data Scientist with Entrepreneurial Spirit.
            </p>{/* Aspiring Data Scientist with Entrepreneurial Spirit */}
        </div>
        <div className='flex justify-start'>   
          <div className='text-[#53528E] '>
            <ul className='flex space-x-6 pt-2'>
              <li className='border-r-2 border-black pr-4'>
                  <EmailButton />
              </li>          
              <li className='hover:underline my-auto'>info@davidninan.com</li>
            </ul>         
          </div>
        </div>
        <div className='text-[#53528E] '>
          <ul className='flex space-x-6 pt-2'>
            <li className='border-r-2 border-black pr-4'>
              <a id='component-id' href="https://www.linkedin.com/in/david-ninan-OO7/" target="_blank" className='hover:underline '>Linkedin</a>
            </li>
            <li className='border-r-2 border-black pr-4'><a href="" className='hover:underline'>Twitter</a></li>
            <li><a href="" className='hover:underline'>Biyn-Enterprises</a></li>
          </ul>
        </div>
    </div>
    <div id='profil-img' className='col-span-2 flex py-16 '>
        <img src={ProfileImg} className='object-scale-down sm:w-[65] lg:w-[65] xl:w-[60] lg:my-12 xl:my-12 ml-auto rounded-3xl shadow-2xl '/>
    </div>
  </div>

  )
}
