import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { container, innerContainer } from './Spinner.module.css';

export const FullPageSpinner = () => {
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
