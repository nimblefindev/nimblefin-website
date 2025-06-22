// import React from 'react';
// import Hero from '../components/Hero';
// import Analytics from '../components/Analytics';
// import Newsletter from '../components/Newsletter';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Analytics />
//       <Newsletter />
//       {/* <Cards /> */}
//       <Footer />
//     </>
//   );
// };

// export default Home;

import React from 'react';
import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import bgImage from '../assets/buildingback.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          zIndex: 0,
        }}
      ></div>

      {/* White translucent overlay */}
      <div
        className="absolute inset-0 bg-white opacity-70"
        style={{ zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Analytics />
        <Newsletter />
        {/* <Cards /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
