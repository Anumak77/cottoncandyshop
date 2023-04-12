import { useState, useEffect } from "react";

function StudentId({id}){
  const [student, setstudent] = useState({});
  const [modules, setmodule] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${id}/`)
      .then(response => response.json())
      .then(data => {
        setstudent(data);
        return fetch(`http://127.0.0.1:8000/api/grade/?student=${id}`)
        
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (Array.isArray(data)) {
          setmodule(data);
        } else {
          console.log('Error: Data is not an array');
        }
      })
      .catch(er => console.log(er))
  }, [id]);

  const displaymodules = () => {
    return (
      <ul>
        {modules.map(module => {
          const val = /\/([A-Za-z0-9]+)\/$/.exec(module.module);
          const moduleCode = val ? val[1] : '';
          return (
            <li key={module.id}>
              <ul>
                Module: {moduleCode}
                <br></br>
                CA mark: {module.ca_mark}
                <br></br>
                Exam mark: {module.exam_mark}
                <br></br>
                Total grade: {module.total_grade}
                <br></br>
                <br></br>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };
  

  const displaystudent = () => {
    return (
      <ul>
        <li>ID: {student.student_id}</li>
        <li>First Name: {student.first_name}</li>
        <li>Last Name: {student.last_name}</li>
        <li>Email: {student.email}</li>
        <br></br>
        <br></br>

      </ul>
    );
  };

  return (
    <div>
      <h3>For Student {student.first_name} {student.last_name}</h3>
      {displaystudent()}
      <h3>Modules this student studies, and their marks</h3>
      {displaymodules()}
    </div>
  );
}

export default StudentId;
