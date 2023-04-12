// import { useState, useEffect } from "react";

// function ModulecohortId({id}){

//   const [module, setmodule] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)
    
//       .then((response) => response.json())
//       .then((data) => {
//         setmodule(data);
//       })
//       .catch(er => console.log(er));
//   }, [id]);

// //   {
// //     "code": "CA208",
// //     "full_name": "Logic",
// //     "delivered_to": [
// //         "http://127.0.0.1:8000/api/cohort/COMSCI2/"
// //     ],
// //     "ca_split": 50
// // },

//   const displaymodulecohort = () => {
//     if (!module) {
//       return <p>Loading...</p>;
//     }
//     return (
//       <ul>
//         <li>
//           Course Code: {module.code}
//           <br></br>
//           Course Name: {module.full_name}
//           <br></br>
//           {/* Delivered to: {module.delivered_to} */}
          
//           CA split :{module.ca_split}
//           <br></br>
//           <br></br>
//         </li>
//       </ul>
//     );
//   };

//   return (
//     <div>
//       <h3>All Modules covered in {id}</h3>
//       {displaymodulecohort()}
//     </div>
//   );
// }

// export default ModulecohortId;



import { useState, useEffect } from "react";

function ModulecohortId({id}){
  const [degree, setdegree] = useState({});
  const [course, setcourse] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/cohort/${id}/`)

      .then(response => response.json())
      .then(data => {
        setdegree(data);
        return fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)
      })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setcourse(data);
        } 
      })
      .catch(er => console.log(er))
  }, [id]);


  // "code": "CA208",
  // "full_name": "Logic",
  // "delivered_to": [
  //     "http://127.0.0.1:8000/api/cohort/COMSCI2/"
  // ],
  // "ca_split": 50

  const displaycourse = () => {
    return (
      <ul>
        {course.map(course => (
          <li key={course.id}>
            <ul>
              Course Code: {course.code}
              <br></br>
              Course Name: {course.full_name}
              <br></br>
              CA Split: {course.ca_split}
              <br></br>
              <br></br>
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const displayDegree = () => {
    return (
      <ul>
        <li>ID: {degree.id}</li>
        <li>Year: {degree.year}</li>
        <li>Name: {degree.name}</li>
        <br></br>
        <br></br>
      </ul>
    );
  };


  return (
    <div>
      <h3>Degree {id}</h3>
      {displayDegree()}
      <h3>Cohort for {id}</h3>
      {displaycourse()}
    </div>
  );
}

export default ModulecohortId;