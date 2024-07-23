import React, { useEffect, useState } from 'react'

export default function Experience() {
    const [lastMonth, stateLastMonth] = useState()

    useEffect(()=>{
        // Create a new Date object for the current date
        const currentDate = new Date();
        
        // Get the month and year of the current date
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Calculate the month and year of the previous month
        let previousMonth = currentMonth - 1;
        let previousYear = currentYear;

        if (previousMonth < 0) {
        // If the previous month is negative, subtract 1 from the year and set the month to 11 (December)
        previousMonth = 11;
        previousYear -= 1;
        }

        // Create a new Date object for the first day of the previous month
        const previousMonthDate = new Date(previousYear, previousMonth, 1);

        // console.log(previousMonthDate.toLocaleString('default', { month: 'long' }));
        let previousMonthVar = previousMonthDate.toLocaleString('default', { month: 'long' }) + ` ${previousYear}`
        
        stateLastMonth(previousMonthVar)
    },[])
  return (
<>
  <div id='experience' className='lg:text-left bg-[#F2F5F7] w-full min-h-screen px-4 md:px-8 lg:px-28 pt-8 md:pt-28 pb-12 md:pb-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 md:gap-y-6 lg:gap-y-12'>

    {/* ######### Experience ############### */}
    <div className='md:col-span-2'>
      <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left '>
        ― Work Experience
      </p>
    </div>
    {/* Biyn Enterprises */}
    <div className='col-span-3 md:col-span-3'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>
        Data Analyst
      </p>
      <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair my-4'>
        Biyn Enterprises / April 2023 - {lastMonth}
      </p>
      <p className='font-light text-cyan-950 text-lg font-Nunito'>
        Providing Consultancy and Software Solutions across multiple technologies
      </p>
    </div>

    <div className='md:col-span-2'></div>
    {/* Appystack */}
    <div className='col-span-3 md:col-span-3'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>
        Full-Stack Developer
      </p>
      <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair my-4'>
        Appystack / April 2022 - April 2023
      </p>
      <p className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
        I’ve been central to delivering three extensive projects (Billing, OPD and Dynamic Architecture) while working at Appystack, mostly for the HIS technologies.
      </p>
      <p className='font-light text-cyan-950 text-lg font-Nunito mb-2'>
        Building custom packages and libraries.
      </p>
      <p className='font-light text-cyan-950 text-lg font-Nunito'>
        Technology and Software Architecture Consultant.
      </p>
    </div>

    <div className='md:col-span-2'></div>
    {/* Codekul */}
    <div className='col-span-3 md:col-span-3 border-b-2 pb-6'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-2'>
        Instructor for Full-Stack Development
      </p>
      <p className='font-medium text-cyan-950 text-xl md:text-2xl font-Playfair my-4'>
        Codekul / August 2022 - October 2022
      </p>
      <p className='font-light text-cyan-950 text-lg font-Nunito'>
        Providing Training and Mentorship in Full-stack technologies.
      </p>
    </div>

    {/* ######### Education ########### */}
    <div className='md:col-span-2'>
      <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left '>
        ― Education
      </p>
    </div>

    {/* MSC Data Analytics */}
    <div className='col-span-3 md:col-span-3'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-6'>
        Dublin Business School
      </p>
      <p className='font-medium text-cyan-950 text-xl font-Playfair mt-6'>
        Master's degree, Data Analytics / September 2023 - Present
      </p>
    </div>

    <div className='md:col-span-2'></div>
    {/* BSC Computer Science */}
    <div className='col-span-3 md:col-span-3 border-b-2 pb-6'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-6'>
        Vishwakarma University
      </p>
      <p className='font-medium text-cyan-950 text-xl font-Playfair my-6'>
        Bachelor's degree, Computer Science / June 2018 - July 2021
      </p>
    </div>

    {/* ######### Courses ########### */}
    <div className='md:col-span-2'>
      <p className='font-bold text-[#462B58] text-xl leading-relaxed uppercase font-Nunito lg:text-left '>
        ― Courses
      </p>
    </div>

    {/* Google Data Analytics */}
    <div className='col-span-3 md:col-span-3'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-4'>
        Google Data Analytics Professional Certificate
      </p>
      <p className='font-medium text-cyan-950 text-xl font-Playfair '>
        Google / 2024
      </p>
    </div>

    <div className='md:col-span-2'></div>
    {/* Credential of Readiness */}
    <div className='col-span-3 md:col-span-3'>
      <p className='font-semibold text-cyan-950 text-2xl font-Playfair leading-6 mb-4'>
        Credential of Readiness
      </p>
      <p className='font-medium text-cyan-950 text-xl font-Playfair '>
        Harvard Business School / 2022
      </p>
    </div>

  </div>
</>

  )
}
