import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import HeaderGeneral from '../header/HeaderGeneral';
import BodyContact from '../Body/BodyContact';
import contact from '../../assets/contact.png';
import Footer from '../footer/Footer';


const Contact = () => {
  const text = 'Contact Us';
  return (
    <Fragment>
      <MetaTags>
        <title>Contact: Excellent Group</title>
        <meta name="description" content="At Excellent group, at Site G02, Spaaco House, 27a
Macarthy street Onikan, Lagos, Nigerian. Working with you and for you in partnership to find lasting solutions" />
        <meta property="og:title" content="Contact" />
        <meta property="keywords" content="Excellent group contact, Excellent address, Logistics , Excellent phone, haulage Lagos" />
      </MetaTags>

      <HeaderGeneral image={contact} text={text} />
      <BodyContact />
      <Footer />
    </Fragment>
  );
};

export default Contact;
