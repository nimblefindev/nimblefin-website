import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/nimblefinlogo.png" />
      </Helmet>
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
