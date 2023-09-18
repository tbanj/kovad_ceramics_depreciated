import React from 'react';
import { IconContext } from 'react-icons';
import { FaSpinner, FaBeer } from 'react-icons/fa';

import spinnerCss from './Spinner.module.css';

const FullPageSpinner = () => {
  const { container, innerContainer } = spinnerCss;
  return (
    <IconContext.Provider value={{ color: '#ec4125', size: '30px' }}>
      <div className={container}>
        <span className={innerContainer}>
          <FaSpinner aria-label="loading" />
        </span>
      </div>
    </IconContext.Provider>
  );
};
export default FullPageSpinner;
