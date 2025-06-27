import React from 'react';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/nimblefinlogo.png" />
      </Helmet>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
