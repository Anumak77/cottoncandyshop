import { useState } from "react";

function Cohortadd() {
  const [id, setid] = useState("");
  const [year, setyear] = useState("");
  const [degree, setdegree] = useState("");
  const [name, setname] = useState("");

  const handleIdChange = (event) => {
    setid(event.target.value);
  };

  const handleYearChange = (event) => {
    setyear(event.target.value);
  };

  const handleDegreeChange = (event) => {
    setdegree(event.target.value);
  };

  const handleNameChange = (event) => {
    setname(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const cohort = {
      id: id,
      year: year,
      degree: `http://127.0.0.1:8000/api/degree/${degree}/`,
      name: `${year}th year ${degree}`,
    };

    fetch("http://127.0.0.1:8000/api/cohort/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cohort)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(er => console.log(er));

    setid("");
    setyear("");
    setdegree("");
    setname("");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Add a cohort</h3>
        <label htmlFor="id">ID:</label>
        <input id="id" value={id} onChange={handleIdChange} />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input id="year" value={year} onChange={handleYearChange} />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input id="degree" value={degree} onChange={handleDegreeChange} />
      </div>

      <button type="submit">Add Cohort</button>
    </form>
  );
}

export default Cohortadd;