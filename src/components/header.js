import React from 'react';
import styled from "styled-components"; 
import logo from '../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const StyledLogoImg = styled.img`
  margin-top: 5px;
  margin-left: 100px;
  margin-bottom: 10px;
  padding: 5px;
`;

const StyledButton = styled.button`
  font-size: 25px;
  font-family: "Yu Mincho";
  color: #3A3B3C;
  cursor: pointer;
  margin-top: 35px;
  margin-right: 80px;
  border: none;
  background-color: #FFFFFF;
  padding: 40px 10px 40px 15px;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  `;

const Header = () => (
      <StyledHeader>
          <StyledLogoImg src={logo} alt={logo}/>
          <ButtonWrapper>
            <StyledButton as={Link} to="./about">About</StyledButton>
            <StyledButton as={Link} to="./projects">Projects</StyledButton>
            <StyledButton as={Link} to="./contact">Contact</StyledButton>
            <StyledButton >Resume</StyledButton>
            <StyledButton>
              <a href="https://github.com/Saya1925" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGithub } size="2x" color="black"/></a></StyledButton>
          </ButtonWrapper>
      </StyledHeader>
);

export default Header;