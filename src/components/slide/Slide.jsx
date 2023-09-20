import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './slide.css';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/slide1_1.png';
import slide2 from '../../assets/slide2_2.png';
import slide3 from '../../assets/slide3_3.png';

const Slide = () => (
  <Carousel className="carousel">
    <Carousel.Item className="carouselitem">
      <img
        className="d-block w-100 carouselimage"
        src={slide1}
        alt="First slide"
      />
      <Carousel.Caption className="caption">
        <h3 style={{ color: '#010111' }}>Let us be your supplier</h3>
        {/* #010101 */}
        <p style={{ color: '#010111' }}>
          Our products prices are highly competitive
        </p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">About Us</button>
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
        <h3>Let's give your floors and walls new look</h3>
        <p>Contact us for Spanish, Italian and Dubai tiles & ceramics</p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">About Us</button>
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
        <h3>For home & Office Marbles</h3>
        <p>Send in your request & we deliver</p>
        <div className="cta">
          <Link to="/about">
            <button className="cta-about">About Us</button>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slide;
