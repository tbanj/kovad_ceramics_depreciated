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

const Products = () => {
  const text = 'Products';

  return (
    <Fragment>
      {/* Metatags  brief explain of  Products for google bots */}
      <MetaTags>
        <title>
          Installation, Maintenance and Repair Service: Kovad Ceramics
        </title>
        <meta
          name="description"
          content="We are a wholly owned indigenous company incorporated in Nigeria to offer superior logistics management services to diverse clients in the public and private sectors."
        />
        <meta property="og:title" content="Logistics Service" />
        <meta
          property="keywords"
          content="fleet management, corporate courier service, training of drivers, import/exportservices, Excellent Logistics and Logistics Services, ells,"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />
      <main>
        <Fade delay={1000}>
          <section className="service-container">
            <h3 className="section-title">Our Logistics Service</h3>
            <div className="service-text">
              <p>
                We are a wholly owned indigenous company incorporated in Nigeria
                to offer superior logistics management services to diverse
                clients in the public and private sectors. We have over the
                years offered consulting services in fleet management and
                leasing of vehicles for multinational organizations, public and
                private firms in Nigeria.
                <br /> <br /> As an innovative and service driven corporate
                entity, Excellent Logistics and Logistics Services understand
                the value of expertise, specialty and has continuously upheld
                them. We also place great emphasis on providing our services in
                a safe and environmental friendly manner. In line with this, we
                have consistently developed a well-tailored and robust package
                to suit our clients&#39; needs and adds value to them at a cost
                efficient manner
              </p>
            </div>
          </section>
        </Fade>

        <section className="services">
          <div className="service-cards-container">
            <ServiceCard image={fleet} title={'FLEET MANAGEMENT'} />
            <ServiceCard image={courier} title={'CORPORATE COURIER SERVICES'} />
            <ServiceCard image={drivers} title={'TRAINING OF DRIVERS'} />
            <ServiceCard image={importation} title={'IMPORT/EXPORT SERVICES'} />
          </div>
        </section>

        <Form1 />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Products;
