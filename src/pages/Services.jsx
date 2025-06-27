import React from 'react';
import Services from '../components/Services'
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/nimblefinlogo.png" />
      </Helmet>
      <Services />
      <Footer />
    </>
  );
};

export default AboutPage;
