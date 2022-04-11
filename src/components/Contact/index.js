import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'contact_service',
      'contact_form',
      refForm.current,
      'p4zAYlaj8KBvzGM-w'
    ).then(
      () => {
        alert('Message successfully sent!');
        // reset the form by reloading the page
        window.location.reload(false);
      },
      () => {
        alert('Failed to send the message, please try again.');
      }
    );
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in full-time/part-time/internship opportunities!
            Please don't hestitate to contact me.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  );
};

export default Contact;