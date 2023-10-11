import React from 'react';
import styled from "styled-components";
import BackgroundImage from '../images/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

const StyledBackgroundImg = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;         
  background-repeat: no-repeat; 
  height: 40vh;               
`;

const StyledContact = styled.div`
  padding: 0px 300px 10px 300px;
  background-size: cover;
  height: auto;
  display: flex;
  justify-content: column;
  margin-top: 8px;
`;

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: flex-start;
  h1 {
    text-align: left;
  }
  h3{
    margin-bottom: 20px; 
  }
`;

const StyledMobile = styled.div`
  display: flex;
  flex-direction: flex-start;
  gap: 15px;
  margin-bottom: 20px;
`;

const StyledMail= styled.div`
  display: flex;
  flex-direction: flex-start;
  gap: 15px;
`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <StyledBackgroundImg>
      <h1>Contact</h1>
        <StyledContact>        
          <StyledForm>
            <h3>Say Hello to Me!</h3>
            <StyledMobile>
              <FontAwesomeIcon icon={ faMobile } size="1.5x"/>
              Phone: +61 4 3552 0435 (Australia)
            </StyledMobile>
            <StyledMail>
            <a href="mailto:sayamatsui19@yahoo.com"><FontAwesomeIcon icon={ faEnvelope } color="black" size="1.5x"/></a>Email: sayamatsui19@yahoo.com <br/>
            </StyledMail>
            
          </StyledForm>
        </StyledContact>
      </StyledBackgroundImg>
    );
  }
}

export default Contact;