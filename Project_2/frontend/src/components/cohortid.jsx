import { useState, useEffect } from "react";

function CohortId({id}){
  const [cohort, setcohort] = useState({});
  const [student, setstudent] = useState([]);

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
      <h3>For Cohort {id}</h3>
      {displaycohort()}
      <h3>Students in {id}</h3>
      {displaystudent()}
    </div>
  );
}

export default CohortId;