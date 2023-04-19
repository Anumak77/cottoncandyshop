import { useState, useEffect } from "react";
import CohortId from "./cohortid";
import ModulecohortId from "./modulecohort";
import styled from "styled-components";
import React from 'react';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #4c6daf;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e5b8e;
  }
`;

function CohortFacts() {
  const [facts, setfacts] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentId, setActiveComponentId] = useState(null);

  const handleButtonClick = (component, id) => {
    setActiveComponent(component);
    setActiveComponentId(id);
  };
  
  const renderActiveComponent = (onBack) => {
    switch (activeComponent) {
      case "cohort":
        return (
          <>
            <CohortId id={activeComponentId} />
            <ButtonContainer>
              <StyledButton onClick={() => onBack()}>
                Back
              </StyledButton>
            </ButtonContainer>
          </>
        );
      case "modulecohort":
        return (
          <>
            <ModulecohortId id={activeComponentId} onBack={() => setActiveComponent(null)} />

            
            <ButtonContainer>
              <StyledButton onClick={() => onBack()}>
                Back
              </StyledButton>
            </ButtonContainer>
          </>
        );
      default:
        return null;
    }
  };
  
  const displayCohort = () => {
    return (
      <div className="container">
        <div className="main-list cohort-all">
          
            {facts.map((cohort) => (
              <li key={cohort.id}>
                {cohort.id}
                <br />
                Year: {cohort.year}
                <br />
                {cohort.name}
                <ButtonContainer>
                  <br />
                  <StyledButton
                    onClick={() => handleButtonClick("cohort", cohort.id)}
                  >
                    More info
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      handleButtonClick("modulecohort", cohort.id)
                    }
                  >
                    Show All Modules
                  </StyledButton>
                </ButtonContainer>
              </li>
            ))}
          
        </div>
      </div>
    );
  };

  useEffect(() => {
    // our code goes here
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => {
        setfacts(data.map((e) => e));
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <div>
      {activeComponent ? (
        renderActiveComponent(() => setActiveComponent(null))
      ) : (
        <>
          <h2>all cohorts</h2>
          <ul>{displayCohort()}</ul>
        </>
      )}
    </div>
  ); }


export default CohortFacts;


