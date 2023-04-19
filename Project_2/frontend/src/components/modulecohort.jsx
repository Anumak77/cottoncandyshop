import { useState, useEffect } from "react";
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

function ModulecohortId({ id, onBack }) {
  const [degree, setdegree] = useState({});
  const [course, setcourse] = useState([]);
  const [backClicked, setBackClicked] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cohort/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setdegree(data);
        return fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`);
      })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setcourse(data);
        }
      })
      .catch((er) => console.log(er));
  }, [id]);

  const displaycourse = () => {
    return (
      <ul className="main-list degree-cohort">
        {course.map((course) => (
          <li key={course.id}>
            Course Code: {course.code}
            <br></br>
            Course Name: {course.full_name}
            <br></br>
            CA Split: {course.ca_split}
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    );
  };

  const displayDegree = () => {
    return (
      <ul>
        ID: {degree.id}
        <br></br>
        Year: {degree.year}
        <br></br>
        Name: {degree.name}
        <br></br>
        <br></br>
      </ul>
    );
  };

  const handleBackClick = () => {
    setBackClicked(true);
    onBack();
  };

  if (backClicked) {
    return null;
  }

  return (
    <div>
      <h3>Degree {id}</h3>
      {displayDegree()}
      <h3>Cohort for {id}</h3>
      {displaycourse()}
      <ButtonContainer>
        <StyledButton onClick={handleBackClick}>Back</StyledButton>
      </ButtonContainer>
    </div>
  );
}

export default ModulecohortId;
