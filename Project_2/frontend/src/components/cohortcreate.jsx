import { useState, useEffect } from "react";

function Cohortadd() {
  const [id, setid] = useState("");
  const [year, setyear] = useState("");
  const [degree, setdegree] = useState([]);
  const [degreeId, setdegreeId] = useState("");
  const [name, setname] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then((response) => response.json())
      .then((data) => {
        setdegree(data);
        if (data.length > 0) {
          setdegreeId(data[0].id);
        }
      })
      .catch((er) => console.log(er));
  }, []);

  const handleIdChange = (event) => {
    setid(event.target.value);
  };

  const handleYearChange = (event) => {
    setyear(event.target.value);
  };

  const handleDegreeChange = (event) => {
    const selectedDegree = degree.find((deg) => deg.id === parseInt(event.target.value));
    setdegreeId(selectedDegree.id);
  };

  const handleNameChange = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cohort = {
      id: id,
      year: year,
      degree: `http://127.0.0.1:8000/api/degree/${degreeId}/`,
      name: `${year}th year ${degree.find((deg) => deg.id === parseInt(degreeId)).shortcode}`,
    };

    fetch("http://127.0.0.1:8000/api/cohort/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cohort),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((er) => console.log(er));

    setid("");
    setyear("");
    setdegreeId(degree.length > 0 ? degree[0].id : "");
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
        <label htmlFor="cohort">Degree:</label>
        <select id="cohort" value={degree} onChange={handleDegreeChange}>
        {degree.map((degre) => (
        <option key={degre.shortcode} value={degre.shortcode}>
        {degre.shortcode} - {degre.full_name}
        </option>
        ))}
        </select>
        </div>

      <button type="submit">Add Cohort</button>
    </form>
  );
}

export default Cohortadd;