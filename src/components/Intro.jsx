import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/ProfilePic1.jpg";
import EmailButton from "./EmailButton";
import DownloadCVButton from "./DownloadCVButton";

export default function Intro() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const divElement = document.getElementById("navbar");

    // Check if the element with the specified ID exists
    if (divElement) {
      // Get the height of the div
      const divHeight = divElement.clientHeight;

      console.log("Div height:", divHeight);

      setNavbarHeight(divHeight);
    } else {
      console.error('Element with ID "yourDivId" not found.');
    }
  }, []);
  return (
    <div className={`mt-16 sm:mt-22 lg:mt-0`}>
      <div className="bg-[#F2F5F7] max-w-screen grid lg:grid-cols-3 px-4 py-6 sm:px-8 lg:px-24">
        {/* Mobile */}
        <div
          id="profil-img"
          className="flex md:hidden justify-center"
        >
          <img
            src={ProfileImg}    
            className=" h-auto w-auto max-h-[280px]"
            alt="Profile"
          />
        </div>
        {/* Left Section */}
        <div className="pt-4 sm:pt-16 lg:col-span-2 h-fit my-auto sm:space-y-8  lg:pr-0">
          <div className="font-Playfair text-xl md:text-3xl xl:text-5xl font-semibold text-left tracking-wide">
            <p className="leading-snug">{/* Researcher & Data Scientist, */}</p>
            <p className="leading-snug">
              Researcher in Computational{" "}
              <span className="whitespace-nowrap">Macro-Geopolitics</span> & AI
              focusing on Trade Resilience.
            </p>
          </div>

          <div className="flex justify-start text-[#53528E]">
            <ul className="flex sm:space-x-6 pt-2">
              <li className="sm:border-r-2 border-black pr-4">
                <EmailButton />
              </li>
              <li className="sm:border-r-2 border-black pr-4">
                <DownloadCVButton />
              </li>
              <li className="hover:underline my-auto ">
                davidsninan@gmail.com
              </li>
            </ul>
          </div>

          <div className="text-[#53528E]">
            <ul className="flex space-x-6 pt-2">
              <li className="border-r-2 border-black pr-4">
                <a
                  id="component-id"
                  href="https://www.linkedin.com/in/david-ninan-OO7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline "
                >
                  Linkedin
                </a>
              </li>
              <li className="border-r-2 border-black pr-4">
                <a
                  href="https://github.com/DavidNinan-cloud"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://biyn-enterprises.com/"
                  className="hover:underline"
                >
                  Biyn-Enterprises
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        {/* <div id='profil-img' className='justify-center lg:justify-start flex py-4 sm:py-8 lg:py-16'>
          <img
            src={ProfileImg}
            className='object-scale-down w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto sm:mx-0 lg:ml-auto rounded-3xl shadow-2xl'
            alt='Profile'
          />
        </div> */}
        {/* <div id='profil-img' className='justify-center lg:justify-end flex py-4 sm:py-8 lg:py-16'>
          <img
            src={ProfileImg}
            className='rounded-3xl shadow-2xl h-auto w-auto' 
            alt='Profile'
          />
        </div> */}
        <div
          id="profil-img"
          className="hidden md:flex justify-center lg:justify-end  py-4 sm:py-6 lg:pt-16"
        >
          <img
            src={ProfileImg}
            className="rounded-3xl shadow-2xl h-auto w-auto max-h-[400px]"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
