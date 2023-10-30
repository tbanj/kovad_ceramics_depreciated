import React, { Fragment, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import EnquiryService from '../httpService/EnquiryService.js';
import './form2.css';

const enquiryService = new EnquiryService();
const Form2 = () => {
  let _isMounted = false;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      mobile,
      message,
    });

    const serverData = {
      token: 1234,
      subject: 'Enquiry',
      message: `<html><div><p style="font-size: 1.5rem;">Client Name: ${name}</p>
      <p style="font-size: 1.5rem;">Phone: ${mobile}</p>
      <p style="font-size: 1.5rem;">${message}</p></div></html>`,
      name: name,
      email: 'info@kovadceramics.com',
      email2: email,
    };

    _isMounted = true;
    if (_isMounted === true) {
      enquiryService
        .create(serverData)
        .then(
          (response) => {
            if (response) {
              toast.success(`Enquiry submitted ${name} we will be in touch`);
              // POST REQUEST HERE
              setName('');
              setEmail('');
              setMobile('');
              setMessage('');
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((error) => {
          toast.error('Enquiry was not sent');
        });
    }
  };
  useEffect(() => {
    return () => {
      _isMounted = false;
    };
  }, []);

  return (
    <Fragment>
      <div className="form2-container">
        <div className="form2-inner-container">
          <form id="form2-contact" onSubmit={handleSubmit}>
            <h3>Get in touch</h3>
            <div className="form2-fields-container">
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number"
                  type="tel"
                  pattern="^[0]\d{10}$"
                  value={mobile}
                  minLength="11"
                  maxLength="11"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your message here...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </fieldset>
              <fieldset className="text-center">
                <button name="submit" type="submit">
                  Send
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Form2;
