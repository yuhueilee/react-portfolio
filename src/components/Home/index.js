import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import LogoTitle from '../../assests/images/logoTitle.png';
import CV from '../../assests/YuHuei_CV.pdf';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'n', 'd', 'y', ',']
  const jobArray = [
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='box home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Fresh Graduate / Front-end Developer / Software Developer</h2>
          <div className='btn-container'>
            <a href={CV} download className='flat-button'>DOWNLOAD CV</a>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
          </div>
        </div>
        <div className='logo-container'>
          <img src={LogoTitle} alt='developer name' />
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#f4af1b' />
    </>
  );
};

export default Home;