import { useState, useEffect } from "react";

function ModulesFacts(){
    const[facts, setfacts] = useState([])
    

    const displayModules = () => {
        return (
          <ul>
            {facts.map(module => (
              <li key={module.id}>
                Course code: {module.code}
                <br />
                Course Name: {module.full_name}
                <br />
                {/* Delivered to: {module.delivered_to[0].split('/').pop()} */}
                
                CA split: {module.ca_split}
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        );
      };
      
      
      
      
      

    useEffect(()=>{
                // our code goes here
                fetch("http://127.0.0.1:8000/api/module/")
                .then((response)=>response.json())
                .then((data)=>{
                    setfacts(data.map(e=> e)) 
                })
                .catch(er=>console.log(er))
            }
        )
        return (
            <div>
              <h1>all Modules</h1>
              <ul>{displayModules()}</ul>
            </div>
          );
        }


export default ModulesFacts;