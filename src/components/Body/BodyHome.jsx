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
        <h3 className="section-title">
          Our customized business process solutions
        </h3>

        <div className="card-container">

          <Fade bottom delay={1000}>
            <div className="one">
              <div className="service-img">
                <img src={hr} alt="hr" />
              </div>

              <h4>HUMAN RESOURCE OUTSOURCING</h4>
              <p>
                Excellent Azel Flakes is a Human Capital Management Consultancy
                offering HR consultancy, training and outsourcing services to
                various organizations in the Pubic and Private Sectors.
              </p>

              <div className="learn-more">
                <Link to="/human-resource-outsourcing">
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

              <h4>LOGISTIC AND HAULAGE OUTSOURCING</h4>
              <p>
                Excellent logistics and haulage services have over the years
                offered consulting services in fleet management and leasing of
                vehicles for multinational organizations, public and private firms
                in Nigeria.
              </p>

              <div className="learn-more">
                <Link to="/logistics">
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

              <h4>CALL CENTER SOLUTIONS</h4>
              <p>
                Excellent strategic megahub limited provides contact centre
                services for various multinationals, Corporates , SMEs and
                government agencies and parastatals. We provide seamless real time
                agent monitoring,etc
              </p>

              <div className="learn-more" id="three">
                <Link to="/callcenter-solution">
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

        <Assessment id={"pink-shade"} />
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