import { useState } from "react";

function Degreeadd() {
  const [full_name, setname] = useState("");
  const [shortcode, setshortcode] = useState("");

  const handleTitleChange = (event) => {
    setname(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setshortcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const degree = {
        full_name: full_name,
        shortcode: shortcode,
    };

    fetch("http://127.0.0.1:8000/api/degree/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(degree)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(er => console.log(er));

    setname("");
    setshortcode("");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
      <h3>add a degree</h3>
        <label htmlFor="title">Degree Name:</label>
        <input id="full_name" value={full_name} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="shortcode">shortcode:</label>
        <input id="shortcode" value={shortcode} onChange={handleAuthorChange} />
      </div>
      <button type="submit">Add Degree</button>
    </form>
  );
}

export default Degreeadd;