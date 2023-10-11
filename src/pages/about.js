import React from 'react';
import styled from "styled-components";
import myself from '../images/myself.png';

const StyledMyselfImg = styled.img`
  height: 70%;
  width: auto;               
  padding: 60px;
  border-radius: 25%;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    padding: 20px 0;
  }
`;

const StyledAbout = styled.div`
  padding: 0px 300px 10px 300px;
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fee8e2;
  margin-top: 8px;

  @media (max-width: 768px) {
      flex-direction: column;
      padding: 50px;
  }
`;

const StyledMe = styled.div`
  text-align: left;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const About = () => (
    <StyledAbout>
      <StyledMe>
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
  )

export default About;
