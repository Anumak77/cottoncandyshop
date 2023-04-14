import { useState, useEffect } from "react";
import DegreeId from "./degreeid";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`;

function DegreeFacts() {
  const [facts, setfacts] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentId, setActiveComponentId] = useState(null);

  const handleButtonClick = (component, id) => {
    setActiveComponent(component);
    setActiveComponentId(id);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "degree":
        return (
          <>
            <DegreeId id={activeComponentId} />
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
  

  const displayFacts = () => {
    return (
      <div className="container">
        <div className="main-list degree-all">
          <ul>
            {facts.map((elem, index) => (
              <li key={index}>
                {elem.full_name}
                <ButtonContainer>
                  <br></br>
  
                  <StyledButton
                    onClick={() => handleButtonClick("degree", elem.shortcode)}
                  >
                    More info
                  </StyledButton>
                </ButtonContainer>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then((response) => response.json())
      .then((data) => {
        setfacts(data.map((e) => e));
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <div>
      {activeComponent ? (
        renderActiveComponent()
      ) : (
        <>
          <h2>all degrees</h2>
          <ul>{displayFacts()}</ul>
        </>
      )}
    </div>
  );
}

export default DegreeFacts;
