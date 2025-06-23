import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#top' || location.hash === '#contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen py-16 text-gray-900 font-sans">
      {/* Contact Form via Google Form */}

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#ba0707] mb-3 leading-tight">
            We'd Love to Hear From You!
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">
            Reach out to us anytime — we're here to help and answer your questions.
          </p>
        </header>


        <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200 md:col-span-2">
          <h2 className="text-xl font-semibold text-[#ba0707] mb-4">
            Reach Out via Form
          </h2>
          <p className="text-gray-700 mb-4">
            Prefer to contact us online? Fill out the form below and we'll get back to you shortly.
          </p>
          <div className="w-full h-[1000px] sm:h-[1100px] md:h-[900px] mb-4">
            <iframe
              title="Nimblefin Contact Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLScpbDuJEYpnMvzXfgYu0qdzQuBHxDcL7LuqOZViqB1_EAaqnA/viewform?embedded=true"
              width="100%"
              height="100%"
              className="w-full h-full rounded"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>

          <p className="text-sm text-gray-500">
            If the form doesn't load, you can also&nbsp;
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScpbDuJEYpnMvzXfgYu0qdzQuBHxDcL7LuqOZViqB1_EAaqnA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              open it in a new tab.
            </a>
          </p>
        </section>

        <br />
        <br />

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Registered Address */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="location" className="mr-2">📍</span>
              Registered Address
            </h2>
            <address className="not-italic text-gray-800 leading-relaxed text-base space-y-1">
              <p>Nimblefin Proworksz Pvt. Ltd.</p>
              <p>#198, CMH Road, 2nd Floor, Desk 148,</p>
              <p>Indiranagar, Bengaluru – 560038,</p>
              <p>Karnataka, India.</p>
            </address>
          </section>

          {/* Business Office */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="office" className="mr-2">🏢</span>
              Business Office
            </h2>
            <address className="not-italic text-gray-800 leading-relaxed text-base space-y-1">
              <p>No. 205, 2nd Floor, Constellation,</p>
              <p>532, Gedalahalli, Hennur Bagalur Road,</p>
              <p>Bengaluru – 560077</p>
            </address>
          </section>

          {/* Phone */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="phone" className="mr-2">📞</span>
              Phone
            </h2>
            <ul className="text-blue-600 space-y-2 text-base font-medium">
              {/* <li>
                <a href="tel:+919945065500" className="hover:underline">
                  +91 9945 06 5500
                </a>
              </li> */}
              <li>
                <a href="tel:+919449223939" className="hover:underline">
                  +91 9449 22 3939
                </a>
              </li>
            </ul>
          </section>

          {/* Website */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="phone" className="mr-2">🌐</span>
              Website
            </h2>
            <ul className="text-blue-600 space-y-2 text-base font-medium">
              <li>
                <a
                  href="https://www.nimblefin.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-lg font-semibold hover:underline"
                >
                  www.nimblefin.in
                </a>
              </li>
            </ul>
          </section>

          {/* Email */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="email" className="mr-2">📧</span>
              Email
            </h2>
            <ul className="text-blue-600 space-y-2 text-base font-medium">
              <li>
                <a href="mailto:connect@nimblefin.in" className="hover:underline">
                  connect@nimblefin.in
                </a>
              </li>
              <li>
                <a href="mailto:nimblefin.p@gmail.com" className="hover:underline">
                  nimblefin.p@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* CIN / GSTIN */}
          <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="flex items-center text-xl font-semibold text-[#ba0707] mb-4">
              <span role="img" aria-label="email" className="mr-2">📄</span>
              CIN / GSTIN
            </h2>
            <ul className="text-blue-600 space-y-2 text-base font-medium">
              <li>
                <p>
                  U70200KA2025PTC198583
                </p>
              </li>
              <li>
                {/* 🏢🧾 */}
                <p>
                  29AAKCN20731ZN
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
