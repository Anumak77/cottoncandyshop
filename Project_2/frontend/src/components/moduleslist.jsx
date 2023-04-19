import { useState, useEffect } from "react";
import ModuleId from "./modulesid";
import styled from "styled-components";

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

function ModulesFacts(){
  const[facts, setfacts] = useState([])
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentId, setActiveComponentId] = useState(null);

  const handleButtonClick = (component, id) => {
    setActiveComponent(component);
    setActiveComponentId(id);
  };
  

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "cohort":
        return (
          <>
            <ModuleId id={activeComponentId} />
            <ButtonContainer>
              <StyledButton onClick={() => setActiveComponent(null)}>
                Back
              </StyledButton>
            </ButtonContainer>

          </>
        );
      default:
        return null;
    }
  };
  

  const displayModules = () => {
    return (
      <div className="container">
      <div className="main-list modules-all">
        {facts.map((module) => (
          <div
            key={module.id}
          >
            <div>{module.code}</div>
            <div>{module.full_name}</div>
            <div>CA split: {module.ca_split}</div>
            <ButtonContainer>
                  <br></br>
  
                  <StyledButton
                    onClick={() => handleButtonClick("cohort", module.code)}

                  >
                    More info
                  </StyledButton>
                </ButtonContainer>
          </div>
        ))}
      </div>
      </div>
    );
  }; 
  
  
  useEffect(()=>{
    // our code goes here
    fetch("http://127.0.0.1:8000/api/module/")
    .then((response)=>response.json())
    .then((data)=>{
        setfacts(data.map(e=> e));
    })
    .catch(er=>console.log(er));
}, []);

      return (
          <div>
              {activeComponent ? (
                  renderActiveComponent()
              ) : (
                  <>
                      <h2>All Modules</h2>
                      <ul>{displayModules()}</ul>
                  </>
              )}
          </div>
      );
    }


export default ModulesFacts;
