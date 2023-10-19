import React from 'react';
import styled from "styled-components";
import botourImage from '../images/botour.png';
import housingService from '../images/housingService.jpg';

const StyledProjects = styled.div`
  diplay: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 300px 10px 300px;
`;

const StyledImages = styled.div`
  margin-top: 5px;
  margin-left: 150px;
  margin-bottom: 10px;
  padding: 5px;
  
  img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    border-radius: 10%;
    margin-right: 100px;
  }
`;

const Projects = () => (
    <div>
      <StyledProjects>
        <h1>Projects</h1>  

        <StyledImages>
        <nav>
          <a href="https://github.com/Saya1925/BoTour" target="_blank" rel="noopener noreferrer">
            <img src={botourImage} alt="BoTourGitHub" />
          </a>
          <h3>Cross-platform mobile app for Wollongong Botanic Garden</h3>
          <p>Capston project at University of Wollongong in 2023. This app features image recognition and mapping capabilities, developed with React Native and Python.</p>

          <a href="https://github.com/Saya1925/BoTour" target="_blank" rel="noopener noreferrer">
            <img src={housingService} alt="hosingServiceGitHub" />
          </a>
          <h3>Housing Service System</h3>
          <p>Group project at University of Wollongong. This platform connects people needing tasks completed with skilled individuals. The platform was built using React and Node.js.</p>
          
          <a href="https://github.com/Saya1925/BoTour" target="_blank" rel="noopener noreferrer">
            
          </a>
          <h3>Library System</h3>
          <p>The progress of to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>

        </nav>
        </StyledImages>
      </StyledProjects>
    </div>
  );

export default Projects;