import { useState } from "react";

function Moduleadd() {
  const [code, setcode] = useState("");
  const [full_name, setfull_name] = useState("");
  const [delivered_to, setdelivered_to] = useState([]);
  const [ca_split, setca_split] = useState("");

  const handleCodeChange = (event) => {
    setcode(event.target.value);
  };

  const handleNameChange = (event) => {
    setfull_name(event.target.value);
  };

  const handleDeliveredChange = (event) => {
    const values = event.target.value.split(/[\s,]+/);
    setdelivered_to(values);
  };
  

  const handleCaSplitChange = (event) => {
    setca_split(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const module = {
      code: code,
      full_name: full_name,
      delivered_to: delivered_to.map((value) => `http://127.0.0.1:8000/api/cohort/${value}/`),
      ca_split: ca_split,
    };

    fetch("http://127.0.0.1:8000/api/module/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(module),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((er) => console.log(er));

    setcode("");
    setfull_name("");
    setdelivered_to([]);
    setca_split("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>add a module</h3>
        <label htmlFor="Code">Course Code:</label>
        <input id="code" value={code} onChange={handleCodeChange} />
      </div>
      <div>
        <label htmlFor="full_name">Course Name:</label>
        <input id="full_name" value={full_name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="delivered_to">Course(s) this module is delivered to:</label>
        <input id="delivered_to" value={delivered_to.join(",")} onChange={handleDeliveredChange} />
      </div>
      <div>
        <label htmlFor="ca_split">CA split:</label>
        <input id="ca_split" value={ca_split} onChange={handleCaSplitChange} />
      </div>

      <button type="submit">Add Module</button>
    </form>
  );
}

export default Moduleadd;