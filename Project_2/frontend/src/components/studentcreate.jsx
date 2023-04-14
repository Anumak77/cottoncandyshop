import { useState, useEffect } from "react";

function Studentadd() {
  const [id, setid] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [cohort, setcohort] = useState("");
  const [email, setemail] = useState("");
  const [selectedCohort, setSelectedCohort] = useState("");
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => {
        setCohorts(data);
        if (data.length > 0) {
          setSelectedCohort(data[0].id);
        }
      })
      .catch((er) => console.log(er)); 
  }, []);

  const handleIdChange = (event) => {
    setid(event.target.value);
  };

  const handleFNameChange = (event) => {
    setfirst_name(event.target.value);
  };

  const handleLNameChange = (event) => {
    setlast_name(event.target.value);
  };
  
  const handleCohortChange = (event) => {
    setSelectedCohort(event.target.value);
  };

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const student = {
      id: id,
      first_name: first_name,
      last_name: last_name,
      cohort: `http://127.0.0.1:8000/api/cohort/${cohort}/`,
      email: `${first_name.toLowerCase()}.${last_name.toLowerCase()}@dcu.ie`,
    };

    fetch("http://127.0.0.1:8000/api/student/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(er => console.log(er));

    setid("");
    setfirst_name("");
    setlast_name("");
    setcohort("");
    setemail("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <h3>add a student</h3>

      <div>
        <label htmlFor="first_name">First Name:</label>
        <input id="first_name" value={first_name} onChange={handleFNameChange} />
      </div>
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input id="last_name" value={last_name} onChange={handleLNameChange} />
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

      <button type="submit">Add Module</button>
    </form>
  );
}

export default Studentadd;