import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import HeaderGeneral from '../header/HeaderGeneral';
import about from '../../assets/about.png';
import BodyAbout from '../Body/BodyAbout';
import Footer from '../footer/Footer';

const About = () => {
  const text = 'About Excellent Group';
  return (
    <Fragment>
      {/* indexing */}
      <MetaTags>
        <title>About Excellent Group: Excellent Group</title>
        <meta name="description" content="Excellent Logistics and Haulage Services Ltd, Excellent Strategic Megahub Ltd Excellent Azel Flakes Consulting Ltd" />
        <meta property="og:title" content="About Excellent Group" />
        <meta property="keywords" content="Managing Director Mrs Yetunde Jaiyesimi, Director Mr Olufemi Jaiyesimi, 
        Chairman Mr Richard Oluranti Omole, Director Mrs Olufunmilola Ogunranti" />
      </MetaTags>

      <HeaderGeneral image={about} text={text} />
      <BodyAbout />
      <Footer />
    </Fragment>
  );
};


export default About;
