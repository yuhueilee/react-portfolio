import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
      <div className='container project-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']}
              idx={15}
            />
          </h1>
          <p>
            During my university life, I have participated in many dirrerent kinds of team projects. 
            This section will display a portion of it.
          </p>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#f4af1b' />
    </>
  );
}

export default Project;