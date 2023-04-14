import React, { useState } from 'react';
import Cohortadd from './cohortcreate';
import Degreeadd from './degreecreate';
import Moduleadd from './modulecreate';
import Studentadd from './studentcreate';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3E8E41;
  }
`;

function Add() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'addcohort':
        return <Cohortadd/>;
      case 'adddegree':
        return <Degreeadd/>;
      case 'addmodule':
        return <Moduleadd/>;
    case 'addstudent':
        return <Studentadd/>
      default:
        return null;
    }
  };

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => handleButtonClick('addcohort')}>
          add cohort
        </StyledButton>
        <StyledButton onClick={() => handleButtonClick('adddegree')}>
          add degree
        </StyledButton>
        <StyledButton onClick={() => handleButtonClick('addmodule')}>
          add module
        </StyledButton>
        <StyledButton onClick={() => handleButtonClick('addstudent')}>
          add student
        </StyledButton>
      </ButtonContainer>
      {renderActiveComponent()}
    </div>
  );
}

export default Add;