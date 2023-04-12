import { useState, useEffect } from "react";

function Gradeadd() {
  const [id, setid] = useState(0);
  const [module, setmodule] = useState("");
  const [ca_mark, setca_mark] = useState("");
  const [exam_mark, setexam_mark] = useState("");
  const [cohort, setcohort] = useState("");
  const [total_grade, settotal_grade] = useState("");
  const [student, setstudent] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/student/")
      .then((response) => response.json())
      .then((data) => {
        const ids = data
          .map((student) => parseInt(student.id))
          .filter((id) => !isNaN(id));
        const maxId = Math.max(...ids);
        setid(maxId + 1);
      })
      .catch((er) => console.log(er));
  }, []);

  const handleModuleChange = (event) => {
    setmodule(event.target.value);
  };

  const handleCaChange = (event) => {
    setca_mark(event.target.value);
  };

  const handleExammarkChange = (event) => {
    setexam_mark(event.target.value);
  };

  const handleCohortChange = (event) => {
    setcohort(event.target.value);
  };

  const handleTotalgradeChange = (event) => {
    settotal_grade(event.target.value);
  };

  const handleStudentgradeChange = (event) => {
    setstudent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const studentObj = {
      id: id,
      module: `http://127.0.0.1:8000/api/module/${module}/`,
      ca_mark: ca_mark,
      exam_mark: exam_mark,
      cohort: `http://127.0.0.1:8000/api/cohort/${cohort}/`,
      total_grade: total_grade,
      student: `http://127.0.0.1:8000/api/student/${student}/`,
    };

    fetch(`http://127.0.0.1:8000/api/grade/?student=${student}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     

      body: JSON.stringify(studentObj),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((er) => console.log(er));

    setid(id + 1);
    setmodule("");
    setca_mark("");
    setexam_mark("");
    setcohort("");
    settotal_grade("");
    setstudent("");
  };

  return (
    <form onSubmit={handleSubmit}>

        <h3>add a grades for a student</h3>

      <div>
        <label htmlFor="module">Module:</label>
        <input id="module" value={module} onChange={handleModuleChange} />
      </div>
      <div>
        <label htmlFor="ca_mark">CA mark:</label>
        <input id="ca_mark" value={ca_mark} onChange={handleCaChange} />
      </div>
        <div>
        <label htmlFor="exam_mark">Exam mark:</label>
        <input id="exam_mark" value={exam_mark} onChange={handleExammarkChange} />
      </div>
      <div>
        <label htmlFor="cohort">Cohort:</label>
        <input id="cohort" value={cohort} onChange={handleCohortChange} />
      </div>
      <div>
        <label htmlFor="student">Student ID:</label>
        <input id="student" value={student} onChange={handleStudentgradeChange} />
      </div>

      <button type="submit">Add Module</button>
    </form>
  );
}

export default Gradeadd;
