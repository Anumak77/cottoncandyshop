import { useState, useEffect } from "react";

function DegreeId({id}){
  const [degree, setdegree] = useState({});
  const [cohort, setcohort] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/degree/${id}/`)
      .then(response => response.json())
      .then(data => {
        setdegree(data);
        return fetch(`http://127.0.0.1:8000/api/cohort/?degree=${id}`)
      })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setcohort(data);
        } 
      })
      .catch(er => console.log(er))
  }, [id]);


  const displayCohort = () => {
    return (
      <ul>
        <div className="main-list cohort-all">
        {cohort.map(cohort => (
          <li key={cohort.id}>
            <ul>
              ID: {cohort.id}
              <br></br>
              Year: {cohort.year}
              <br></br>
              Name: {cohort.name}
              <br></br>
              <br></br>
            </ul>
          </li>
        ))}
        </div>
      </ul>
    );
  };

  const displayDegree = () => {
    return (
      <div className="main-list degree-all">
      <ul>
        Full name: {degree.full_name}
        <br></br>
        Shortcode: {degree.shortcode}
        <br></br>
        <br></br>
      </ul>
      </div>
    );
  };


  return (
    <div>
      <h3>Degree {id}</h3>
      {displayDegree()}
      <h3>Cohort for {id}</h3>
      {displayCohort()}
    </div>
  );
}

export default DegreeId;