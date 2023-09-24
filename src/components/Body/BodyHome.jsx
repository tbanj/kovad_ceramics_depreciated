import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import hr from '../../assets/hr.png';
import logistics from '../../assets/logistics.png';
import call from '../../assets/headphone.png';
import fleet from '../../assets/fleet.png';
import './bodyhome.css';
import Form1 from '../forms/Form1';
import ConnectedEnterprise from '../connectedEnterprise/ConnectedEnterprise';
import Assessment from '../assessment/Assessment';
import Fade from 'react-reveal/Fade';

const BodyHome = () => (
  <Fragment>
    <main className="body-home">
      <section>
        <div className="d-flex justify-content-center">
          <h3 className="section-title">Some of our services are</h3>
        </div>

        <div className="card-container">
          <Fade bottom delay={1000}>
            <div className="one">
              <div className="service-img">
                <img src={hr} alt="hr" />
              </div>

              <h4>Wholesales & Retails of Marbles</h4>
              <p>Wholesales & Retails of Marbles</p>

              <div className="learn-more">
                <Link to="/sales-marbles">
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1200}>
            <div className="one">
              <div className="service-img bus">
                <img src={logistics} alt="hr" />
              </div>

              <h4>Wholesales & Retails of Ceramic Tiles</h4>
              <p>Wholesales & Retails of Ceramic Tiles</p>

              <div className="learn-more">
                <Link to="/sales-tiles">
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1400}>
            <div className="one">
              <div className="service-img">
                <img src={call} alt="hr" />
              </div>

              <h4>Maintenance & Housekeeping of Tiles & Marbles</h4>
              <p>Maintenance & Housekeeping of Tiles & Marbles</p>

              <div className="learn-more" id="three">
                <Link to="/maintenance">
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <span className="see-more">
          <Link to="/logistics">
            <button className="see-more-btn">See More</button>
          </Link>
        </span>
      </section>

      <section className="why-choose pt-5">
        <h3 className="text-right pr-5 excellent-red">Why choose our BPO?</h3>

        <Assessment id={'pink-shade'} />
      </section>

      <ConnectedEnterprise />

      <Fade bottom>
        <section id="pink-shade" className="quote-container">
          <div className="quote px-3">
            <div className="quote-text-container">
              <h3>
                Looking for a better way to transport your staffs to & from the
                office
              </h3>
              <p>Engage Excellent Logistics Fleet Management Service today</p>
              <button>Get a Quote</button>
            </div>
            <div className="quote-image">
              <div className="quote-image-container">
                <img src={fleet} alt="always connected" />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Form1 />
    </main>
  </Fragment>
);

export default BodyHome;
