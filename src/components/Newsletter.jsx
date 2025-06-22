import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Would you like to connect with us?
          </h1>
          <p className='italic font-semibold text-gray-700 mt-1.5'>Subscribe to Nimblefin updates and get expert tips on claims, RCM, and insurance desk efficiency.</p>
        </div>
        <div className='my-4 flex flex-col justify-center'>
          <Link
            to="/contact"
            className="bg-[#ba0707] text-white rounded-md font-medium w-[200px] py-3 text-center mx-auto hover:bg-[#a00505] transition-colors duration-300"
          >
            Contact Us
          </Link>
          <p className='mt-4 text-center italic font-semibold text-gray-700'>
            Wanna know more about us? Download our{' '}
            <a
              href='/contact'
              // href="../assets/nimblefin-brochure.pdf"
              // download
              className='text-[#ba0707] cursor-pointer underline'
            >
              brochure
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
