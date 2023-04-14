import { useState, useEffect } from "react";

function Gradeadd() {
  const [id, setid] = useState(0);
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("");
  const [ca_mark, setca_mark] = useState("");
  const [exam_mark, setexam_mark] = useState("");
  const [cohorts, setCohorts] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [total_grade, settotal_grade] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");

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

    fetch("http://127.0.0.1:8000/api/module/")
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
        if (data.length > 0) {
          setSelectedModule(data[0].id);
        }
      })
      .catch((er) => console.log(er));

    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => {
        setCohorts(data);
        if (data.length > 0) {
          setSelectedCohort(data[0].id);
        }
      })
      .catch((er) => console.log(er));

    fetch("http://127.0.0.1:8000/api/student/")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        if (data.length > 0) {
          setSelectedStudent(data[0].id);
        }
      })
      .catch((er) => console.log(er));
  }, []);

  const handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
  };

  const handleCaChange = (event) => {
    setca_mark(event.target.value);
  };

  const handleExammarkChange = (event) => {
    setexam_mark(event.target.value);
  };

  const handleCohortChange = (event) => {
    setSelectedCohort(event.target.value);
  };

  const handleTotalgradeChange = (event) => {
    settotal_grade(event.target.value);
  };

  const handleStudentgradeChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const gradeObj = {
      id: id,
      module: `http://127.0.0.1:8000/api/module/${selectedModule}/`,
      ca_mark: ca_mark,
      exam_mark: exam_mark,
      cohort: `http://127.0.0.1:8000/api/cohort/${selectedCohort}/`,
      total_grade: total_grade,
      student: `http://127.0.0.1:8000/api/student/${selectedStudent}/`,
      };

      fetch("http://127.0.0.1:8000/api/grade/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gradeObj),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Grade added successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while adding the grade");
        });};

        return (


        <div>
        <h1>Add Grade</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="module">Module:</label>
        <select id="module" value={selectedModule} onChange={handleModuleChange}>
        {modules.map((module) => (
        <option key={module.code} value={module.code}>
        {module.code} - {module.full_name}
        </option>
        ))}
        </select>
        </div>


        <div>
        <label htmlFor="ca_mark">CA Mark:</label>
        <input id="ca_mark" type="text" value={ca_mark} onChange={handleCaChange} />
        </div>
        <div>
        <label htmlFor="exam_mark">Exam Mark:</label>
        <input id="exam_mark" type="text" value={exam_mark} onChange={handleExammarkChange} />
        </div>


        <div>
        <label htmlFor="cohort">Cohort:</label>
        <select id="cohort" value={selectedCohort} onChange={handleCohortChange}>
        {cohorts.map((cohort) => (
        <option key={cohort.id} value={cohort.id}>
        {cohort.id}
        </option>
        ))}
        </select>
        </div>


        <div>
        <label htmlFor="student">Student:</label>
        <select id="student" value={selectedStudent} onChange={handleStudentgradeChange}>
        {students.map((student) => (
        <option key={student.id} value={student.id}>
        {student.first_name} {student.last_name}
        </option>
        ))}
        </select>
        </div>
        <button type="submit">Add Grade</button>
        </form>
        </div>
        );
        }
        
        export default Gradeadd;
