import React, { useState } from 'react';
import ModulesFacts from './moduleslist';
import DegreeFacts from './degreelist';
import CohortFacts from './cohortlist';
import Cohortadd from './cohortcreate';
import Degreeadd from './degreecreate';
import Moduleadd from './modulecreate';
import Studentadd from './studentcreate';
import Gradeadd from './gradeadd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonRow = styled.div`
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
  margin-left: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3E8E41;
  }
`;

function Initial() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'degree':
        return <DegreeFacts />;
      case 'module':
        return <ModulesFacts />;
      case 'cohort':
        return <CohortFacts />;
      case 'addcohort':
        return <Cohortadd/>;
      case 'adddegree':
        return <Degreeadd/>;
      case 'addmodule':
        return <Moduleadd/>;
      case 'addstudent':
        return <Studentadd/>;
      case 'addgrade':
        return <Gradeadd/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <ButtonRow>
        <ButtonContainer>
          <StyledButton onClick={() => handleButtonClick('degree')}>
            Display all degrees
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('module')}>
            Display all modules
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('cohort')}>
            Display all cohorts
          </StyledButton>
        </ButtonContainer>
      </ButtonRow>
      <ButtonRow>
        <ButtonContainer>
        <StyledButton onClick={() => handleButtonClick('adddegree')}>
            add degree
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('addmodule')}>
            add module
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('addcohort')}>
            add cohort
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('addstudent')}>
            add student
          </StyledButton>
          <StyledButton onClick={() => handleButtonClick('addgrade')}>
            add grades
          </StyledButton>
        </ButtonContainer>
      </ButtonRow>
      {renderActiveComponent()}
    </div>
  );
}

export default Initial;

