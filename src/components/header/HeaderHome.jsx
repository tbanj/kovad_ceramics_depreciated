import React, { Fragment } from 'react';
// import MdTime from 'react-ionicons/lib/MdTime';
import Navbar from '../navbar/Navbar';
// import phone from '../../assets/phone.svg';
// import mail from '../../assets/mail.svg';
import Slide from '../slide/Slide';
import './headerhome.css';

const HeaderHome = () => (
  <Fragment>
    <header className="header-home">
      {/* <div className="coperate-info">
        <div className="coperate-info-left">
          <div className="coperate-items">
            <img src={phone} alt="phone icon" />
            <p>08023123876</p>
          </div>
          <div className="coperate-items">
            <img src={mail} alt="email icon" />
            <p>info@excellentng.com</p>
          </div>
        </div>

        <div className="coperate-info-right">
          <div className="coperate-items hours">
            <MdTime
              fontSize="2rem"
              color="#fafafa"
              style={{ backgroundColor: 'transparent', marginRight: '7px' }}
            />
            <p>Mon - Friday</p>
            <p>8am - 5pm</p>
          </div>
        </div>
      </div> */}

      <Slide />
      <Navbar />
    </header>
  </Fragment>
);

export default HeaderHome;
