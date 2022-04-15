import React from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Project1 from '../../assests/images/project-1.jpeg';
import Project2 from '../../assests/images/project-2.jpg';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const projects = [
    {
      img: Project1,
      title: 'Advertisement Decoder',
      description: 'This project focuses on combining the image features with the text descriptor and predict the symbolic regions with labels that draws the audience\'s attention.',
      link: 'https://github.com/yuhueilee/Ads-Decoder'
    },
    {
      img: Project2,
      title: 'Hybrid MPI Implementation',
      description: 'This project aims to design and develop a tsunami detection in a distributed wireless sensor network. The programming language used is C and the libraries used are OpenMP and MPI.',
      link: 'https://github.com/yuhueilee/FIT3143-ParallelProgramming-Assignments'
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
      <div className='box project-page'>
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
        <div className='project-ctn'>
          <Row xs={1} md={2} className="g-4">
            {projects.map((project, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary" href={project.link} target="_blank">GitHub</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Loader type='line-scale-pulse-out' color='#f4af1b' />
    </>
  );
}

export default Project;