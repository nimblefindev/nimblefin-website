import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-black px-4 sm:px-6 md:px-8'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#8B0000] font-bold text-sm text-transform: uppercase'>
          Re-define, Re-build Healthcare Operations.<br />Financial Optimization through Digitally Orchestrated Systems
        </p> */}
        <p className="text-[#8B0000] font-bold text-xs sm:text-sm md:text-base uppercase text-center leading-snug sm:leading-normal px-4 sm:px-6">
          Re-define, Re-build Healthcare Operations.
          <br className="hidden sm:block" />
          {" "}Financial Optimization through Digitally Orchestrated Systems
        </p>
        <div className="w-full flex justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6 text-center whitespace-normal md:whitespace-nowrap">
            Power<span className="text-[#0000FF]">i</span>ng Smarter Hosp<span className="text-[#0000FF]">i</span>tals.
          </h1>
        </div>
        <div className='flex justify-center items-center flex-wrap'>
          <p className='md:text-4xl sm:text-3xl text-md font-bold py-2'>
            Trusted for
          </p>
          <span className='md:text-4xl sm:text-3xl text-md font-bold md:pl-2 pl-1'>
            <Typewriter
              // words={['RCM', 'Insurance Services', 'Health Financing']}
              words={['Revenue Cycle Management', 'Health Financing', 'Affinity & Self Fund Programs']}
              loop={true}
              cursor
              cursorStyle='|'
              cursorBlinking={false}
              typeSpeed={120}
              deleteSpeed={140}
              delaySpeed={1000}
            />
          </span>
        </div>
        {/* <p className='md:text-2xl text-xl font-bold text-gray-600'>
          Experience professionally managed insurance desk & claims support, Increased patient turnouts & ARPOB, Reduced services costs and write-offs with Nimblefin
        </p> */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 text-center leading-relaxed px-4 sm:px-6">
          Experience professionally managed insurance desk & claims support,
          Increased patient turnouts & ARPOB, Reduced service costs and write-offs
          with N<span className="text-[#0000FF]">i</span>mblef<span className="text-[#0000FF]">i</span>n.
        </p>

        <Link
          to="/contact"
          className="bg-[#ba0707] text-white rounded-md font-medium w-[200px] py-3 text-center mx-auto hover:bg-[#a00505] transition-colors duration-300 mt-8"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
