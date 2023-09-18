import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import './bodyabout.css';
import smilingLady from '../../assets/excellent-group.png';
import yetunde from '../../assets/yetunde.png';
import imagePlaceholder from '../../assets/imagePlaceholder.png';
import ciroma from '../../assets/ciroma.png';
import ring from '../../assets/ring.png';

const BodyAbout = () => (
  <Fragment>
    <main className="body-about">
      <section>
        <h3 className="section-title">Excellent Group</h3>

        <div className="excellent-group-container1">
          <div className="excellent-group-container2">
            <Fade left>
              <div className="excellent-group-image-container">
                <img src={smilingLady} alt="smiling lady" />
              </div>
            </Fade>
            <Fade right>
              <div className="excellent-group-text">
                <p>
                  Excellent Group consists of three thriving companies namely:
              </p>
                <ul>
                  <li>Excellent Logistics and Haulage Services Limited</li>
                  <li>Excellent Strategic Megahub Limited </li>
                  <li>Excellent Azel Flakes Consulting Limited</li>
                </ul>
                <p>
                  The companies are registered as limited liability companies
                  under the Company and Allied Matters Act of 1990. Our Principals
                  have over 100 years of combined experience in Banking, Human
                  resource management Consultancy, telecommunications, Project
                  management, Logistics , Strategy and Finance. Our personnel have
                  the right skills and experience to create bespoke and unique
                  solutions for various needs and challenges in our fields of
                  service. Today, we are a recognised partner to major
                  multinationals, corporates, SMEs and government organizations.
                  We employ the latest technology to deliver unrivaled services in
                  line with global best practices. At Excellent group, we work to
                  the highest standards of professionalism, confidentiality, and
                  discretion. Working with you and for you in partnership to find
                  lasting solutions
              </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <h3 className="section-title text-right pr-5">Vision and Mission</h3>
      <div className="vision">
        <div className="vision-text-container">
          <div>
            <h3>Vision</h3>
            <p>
              Connecting people, businesses and communities to a better future
            </p>
          </div>
          <div>
            <h3 className="text-right">Mission</h3>
            <p>
              To become the world’s no 1 go to company - applying insights,
              service quality and innovation to create sustanable growth for
              business and society
            </p>
          </div>
        </div>
      </div>
      <section />

      <section className="values">
        <h3 className="section-title pr-5 pb-4">Company values</h3>
        <Pulse>
          <div className="values-image-container">
            <img src={ring} alt="company values" />
          </div>
        </Pulse>
      </section>

      <section className="directors mt-5">
        <h3 className="section-title text-right pr-5">Directors</h3>
        <Fade>
          <div className="directors-container">
            <div className="director-container">
              <div className="director-image-container pb-3">
                <img src={imagePlaceholder} alt="director1" />
              </div>
              <h4>Mr Richard Oluranti Omole</h4>
              <p>Chairman</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <img src={yetunde} alt="director2" />
              </div>
              <h4>Mrs Yetunde Jaiyesimi</h4>
              <p>Managing Director</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <img src={imagePlaceholder} alt="director3" />
              </div>
              <h4>Mr Olufemi Jaiyesimi</h4>
              <p>Director</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <img src={imagePlaceholder} alt="director4" />
              </div>
              <h4>Mrs Olufunmilola Ogunranti</h4>
              <p>Director</p>
            </div>

            <div className="director-container">
              <div className="director-image-container pb-3">
                <img src={ciroma} alt="director5" />
              </div>
              <h4>Mr Mohammed Ciroma</h4>
              <p>Director</p>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  </Fragment>
);

export default BodyAbout;
