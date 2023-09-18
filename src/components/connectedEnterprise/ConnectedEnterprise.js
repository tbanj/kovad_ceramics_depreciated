import React from 'react';
import connected from '../../assets/connected.png';
import Fade from 'react-reveal/Fade';

export default function ConnectedEnterprise() {
  return (
    <Fade bottom>
      <section className="connected-container">
        <div className="connected">
          <div className="connected-image-container">
            <img src={connected} alt="always connected" />
          </div>
          <div className="connected-text-container px-3">
            <h3>Keep Your Enterprise Connected Always!</h3>
            <p>
              Through our partnership with Avaya, we can provide continous
              communication and support to your customers at ease
            </p>
            <button>Start Now</button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
