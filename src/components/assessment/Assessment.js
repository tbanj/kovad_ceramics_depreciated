import React from 'react';
import PropTypes from 'prop-types';
import numerical from '../../assets/numerical.png';
import verbal from '../../assets/verbal.png';
import infographic from '../../assets/infographic.png';
import technical from '../../assets/technical.png';
import Fade from 'react-reveal/Fade';

export default function Assessment({ id }) {
  return (
    <Fade bottom>
      <div id={id} className="why-choose-container px-3">
        <div className="why-choose-1">
          <div className="pb-3">
            <h3>Talent Assessment Test for Banking and Engineering jobs</h3>
          </div>
          <div className="pb-5">
            <p>
              Our assessment solutions provide key indicators on the potential
              and skills for young graduates to join the Nigerian workforce.
            </p>
          </div>
          <div className="test-categories">
            <span>
              <button className="shake-button">Start Evaluation</button>
            </span>
            <div className="test-category">
              <div className="test-image-container">
                <img src={numerical} alt="Numerical test" />
              </div>
              <p>NumericalTest</p>
            </div>
            <div className="test-category">
              <div className="test-image-container">
                <img src={verbal} alt="" />
              </div>
              <p>Verbal Test</p>
            </div>
            <div className="test-category">
              <div className="test-image-container">
                <img src={technical} alt="" />
              </div>
              <p>Technical Test</p>
            </div>
          </div>
        </div>

        <div className="why-choose-2">
          <div className="infographic-container">
            <img src={infographic} alt="" />
          </div>
        </div>
      </div>
    </Fade>
  );
}

Assessment.propTypes = {
  id: PropTypes.string.isRequired,
};
