import { useState, useEffect } from "react";
import StudentId from "./studentid";
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

function CohortId({id}){
  const [cohort, setcohort] = useState({});
  const [student, setstudent] = useState([]);
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentId, setActiveComponentId] = useState(null);

  const handleButtonClick = (component, id) => {
    setActiveComponent(component);
    setActiveComponentId(id);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "grades":
        return (
          <>
            <StudentId id={activeComponentId} />
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

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cohort/${id}/`)
      .then(response => response.json())
      .then(data => {
        setcohort(data);
        return fetch(`http://127.0.0.1:8000/api/student/?cohort=${id}`)
        
      })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setstudent(data);
        } 
      })
      .catch(er => console.log(er))
  }, [id]);


  const displaystudent = () => {
    return (
      <ul>
        {student.map(student => (
          <li key={student.id}>
            <ul>
              Student ID: {student.student_id}
              <br></br>
              First Name: {student.first_name}
              <br></br>
              Last Name: {student.last_name}
              <br></br>
              Email :{student.email}
              <br></br>
              <br></br>
              <ButtonContainer>
                  <br></br>
  
                  <StyledButton
                    onClick={() => handleButtonClick("grades", student.student_id)}
                  >
                    Display
                  </StyledButton>
                </ButtonContainer>
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const displaycohort = () => {
    return (
      <ul>
        <li>ID: {cohort.id}</li>
        <li>Year: {cohort.year}</li>
        <li>Name: {cohort.name}</li>
        <br></br>
        <br></br>

      </ul>
    );
  };




  return (
<div>
{activeComponent ? (
  renderActiveComponent()
) : (
  <>
      <h3>For Cohort {id}</h3>
      {displaycohort()}
      <h3>Students in {id}</h3>
      {displaystudent()}
  </>
)}
</div>
  );
}

export default CohortId;


