import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Form1 from '../../forms/Form1';
import MetaTags from 'react-meta-tags';
import fleet from '../../../assets/fleet.png';
import courier from '../../../assets/courier.png';
import drivers from '../../../assets/drivers.png';
import importation from '../../../assets/importation.png';
import HeaderGeneral from '../../header/HeaderGeneral';
import bannerImage from '../../../assets/services.png';
import ServiceCard from '../ServiceCard';
import Footer from '../../footer/Footer';
import '../service.css';

const Services = () => {
  const text = 'Services';

  return (
    <Fragment>
      {/* Metatags  brief explain of  Services for google bots */}
      <MetaTags>
        <title>
          Installation, Maintenance and Repair Service: Kovad Ceramics
        </title>
        <meta
          name="description"
          content="We are a wholly owned indigenous company incorporated in Nigeria to render installation, maintenance and repair works on ceramics tiles and marbles."
        />
        <meta
          property="og:title"
          content="Installation, Maintenance and Repair Service"
        />
        <meta
          property="keywords"
          content="Installation of ceramics tiles, Maintenance of ceramics tiles, Repair Service of ceramics tiles"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />
      <main>
        <Fade delay={1000}>
          <section className="service-container">
            <h3 className="section-title">
              Our Installation, Maintenance and Repair Service
            </h3>
            <div className="service-text">
              <p>
                We are a wholly owned indigenous company incorporated in Nigeria
                to offer installation, maintenance and repair works on ceramics
                tiles and marbles.
                <br /> <br /> As an innovative and service driven corporate
                entity, Kovad Ceramics understand the value of expertise,
                specialty and has continuously upheld them. We also place great
                emphasis on providing our services in a safe and environmental
                friendly manner. In line with this, we have consistently
                developed a well-tailored and robust package to suit our
                clients&#39; needs and adds value to them at a cost efficient
                manner
              </p>
            </div>
          </section>
        </Fade>

        <section className="services">
          <div className="service-cards-container">
            <ServiceCard image={fleet} title={'INSTALLATION SERVICE TEAM'} />
            <ServiceCard image={courier} title={'MAINTENANCE SERVICE TEAM'} />
            <ServiceCard image={drivers} title={'REPAIR SERVICE TEAM'} />
          </div>
        </section>

        <Form1 />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Services;
