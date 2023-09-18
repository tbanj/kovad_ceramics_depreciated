import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './service.css';

export default function ServiceCard({ image, title }) {
  return (
    <Fade delay={600}>
      <div className="service-card">
        <div className="service-card-image">
          <img src={image} alt="" />
        </div>
        <h4>{title}</h4>
      </div>
    </Fade>
  );
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
