import { useState, useEffect } from "react";

function ModuleId({id}){

  const [module, setmodule] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setmodule(data);
      })
      .catch(er => console.log(er));
  }, [id]);

  const displaymodule = () => {
    if (!module) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        

          <br></br>
          Course Name: {module.full_name}
          <br></br>
          {/* Delivered to: {module.delivered_to} */}
          
          CA split :{module.ca_split}
          <br></br>
          <br></br>
        
      </ul>
    );
  };

  return (
    <div>
      <h3>Module Details: {id}</h3>
      {displaymodule()}
    </div>
  );
}

export default ModuleId;





