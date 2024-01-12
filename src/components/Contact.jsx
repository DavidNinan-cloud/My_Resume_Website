import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='bg-[#565594] h-fit px-24 grid grid-cols-4 text-white'>
        <div className="col-span-2 text-2xl md:text-4xl font-extrabold text-left font-Playfair tracking-wider py-24">
                David Ninan
        </div>
        <div className='text-center my-auto space-y-4'>
            <p className=' '>― SOCIALS</p>
            <p className=' '>
                <a id='component-id' href="https://www.linkedin.com/in/david-ninan-OO7/" target="_blank" className='underline hover:no-underline'>Linkedin</a>
            </p>
        </div>
        <div className='text-left my-auto space-y-4'>
            <p>― CONTACTS</p>
            <p className='line-through'>info@davidninan.com</p>
        </div>
    </div>
  )
}
