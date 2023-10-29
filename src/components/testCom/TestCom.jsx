import React, { useEffect, useState } from 'react';
import { init, countries } from './script';
import './style.css';

const TestCom = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    const callPhoneList = async () => {
      script.src = `https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js`;
      script.async = true;
      await init(countries);

      document.body.appendChild(script);
    };

    callPhoneList();
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="parent">
      <div
        className="pn-select"
        id="js_pn-select"
        // style={{-prefixLength: 2}}
      >
        {/* Selected prefix */}
        <button
          className="pn-selected-prefix"
          aria-label="Select phonenumber prefix"
          id="js_trigger-dropdown"
          tabIndex={1}
        >
          <img
            className="pn-selected-prefix__flag"
            id="js_selected-flag"
            src="https://flagpedia.net/data/flags/icon/36x27/nl.png"
          />
          {/* prettier-ignore */}
          <svg className="pn-selected-prefix__icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#081626" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>
        {/* Phone number input */}
        <div className="pn-input">
          <label className="pn-input__label">Phonenumber*</label>
          <div className="pn-input__container">
            <input
              className="pn-input__prefix"
              defaultValue={+31}
              type="text"
              name="phonenumber-prefix"
              id="js_number-prefix"
              tabIndex={-1}
            />
            <input
              className="pn-input__phonenumber"
              id="js_input-phonenumber"
              type="tel"
              name="phonenumber"
              pattern="\d*"
              defaultValue
              placeholder=" "
              autoComplete="nope"
              required
              max={10}
              tabIndex={0}
            />
            <small className="pn-input__error">
              This is not a valid phone number
            </small>
          </div>
        </div>
        {/* Dropdown */}
        <div className="pn-dropdown" id="js_dropdown">
          <div className="pn-search">
            {/* prettier-ignore */}
            <svg className="pn-search__icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#103155" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            <input
              placeholder="Search for countries"
              className="pn-search__input search"
              type="search"
              id="js_search-input"
              autoComplete="nope"
            />
          </div>
          {/* Country list */}
          <ul className="pn-list list" id="js_list" />
          <div
            className="pn-list-item pn-list-item--no-results"
            style={{ display: 'none' }}
            id="js_no-results-found"
          >
            No results found
          </div>
        </div>
      </div>
      <div className="dribble-creds">
        Recreation of
        <a
          href="https://dribbble.com/shots/15474151-Phone-Number-Input-Field-Exploration"
          target="_blank"
        >
          this
        </a>
        Dribbble shot
      </div>
    </section>
  );
};

export default TestCom;
