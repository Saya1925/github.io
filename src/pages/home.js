import React from 'react';
import styled from "styled-components";
import Contact from './contact';
import Projects from './projects';
import About from './about'; 


const StyledFont = styled.div`
  font-family: "Palatino Linotype";
  font-size: 35px;
  color: #3A3B3C;
  

  @media (max-width: 768px) {
      flex-direction: column;
      padding: 30px;
  }
`;

const Home = () => (
  <div>
    <StyledFont>
      <About /> 
      <Projects />
      <Contact />
    </StyledFont>
  </div>
);

export default Home;
