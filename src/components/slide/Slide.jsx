import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slide.css';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

const Slide = () => (
  <Carousel className="carousel">
    <Carousel.Item className="carouselitem">
      <img
        className="d-block w-100 carouselimage"
        src={slide1}
        alt="First slide"
      />
      <Carousel.Caption className="caption">
        <h3>Let's do it for you</h3>
        <p>We provide business process outsource services that helps you save cost</p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">
              About Us
            </button>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="carouselitem">
      <img
        className="d-block w-100 carouselimage"
        src={slide2}
        alt="Third slide"
      />

      <Carousel.Caption className="caption">
        <h3>Let's collaborate together</h3>
        <p>We provide business process outsource to enhance your prodcutivity</p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">
              About Us
            </button>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="carouselitem">
      <img
        className="d-block w-100 carouselimage"
        src={slide3}
        alt="Third slide"
      />

      <Carousel.Caption className="caption">
        <h3>Let's help your business grow</h3>
        <p>We provide business process outsource services that help you focus on your competencies</p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">
              About Us
            </button>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slide;
