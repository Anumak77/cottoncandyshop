

import { useState, useEffect } from "react";
import React from 'react';

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
      <ul>
        {course.map((course) => (
          <li key={course.id}>
            <ul>
              Course Code: {course.code}
              <br></br>
              Course Name: {course.full_name}
              <br></br>
              CA Split: {course.ca_split}
              <br></br>
              <br></br>
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const displayDegree = () => {
    return (
      <ul>
        <li>ID: {degree.id}</li>
        <li>Year: {degree.year}</li>
        <li>Name: {degree.name}</li>
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
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

export default ModulecohortId;
