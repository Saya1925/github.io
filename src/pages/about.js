import React, { useState } from 'react';
import styled from "styled-components";
import myself from '../images/myself.png';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #000',
  },
};

Modal.setAppElement('#root');

const StyledMyselfImg = styled.img`
  height: 100%;
  width: auto;               
  padding: 50px;
  border-radius: 25%;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 50%;
    padding: 20px 0;
  }
`;

const StyledAbout = styled.div`
  padding: 300px 300px 200px 300px;
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fee8e2;
  margin-top: 8px;

  @media (max-width: 768px) {
      flex-direction: column;
      padding: 80px;
  }
`;

const StyledMe = styled.div`
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const About = () => {

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return(
    <StyledAbout>
      <StyledMe>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          >
          <p>Please note that this website is currently under development. More content will be added soon.</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
    
      <h1>About Me</h1>  
        <h3>Hello! My name is Saya and I'm so glad you are here. </h3>
            <p>I recently graduated with a master's degree in IT at University of Wollongong, specializing in Information System Development.</p>
            <p>The year-long graduate project I had worked with teammate inspired and curious to learn more about software develpment.
            The thrill of working on an idea and seeing it turn into something real is one of the most incredible experiences I have ever had. 
            I'm eager to further hone my skills in a professional setting. Check out some of my featured work below!</p>
            <p>Outside of IT field, I have a passion for running and dancing, both of which I've enjoyed since childhood. I believe in dedicating myself fully to whatever I pursue.</p>
      </StyledMe>
      <StyledMyselfImg src={myself} alt="Myself" />
    </StyledAbout>
  );
};

export default About;
