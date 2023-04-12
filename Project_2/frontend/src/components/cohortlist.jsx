import { useState, useEffect } from "react";

function CohortFacts(){
    const[facts, setfacts] = useState(["putting on the condom bby <3 pls be patient am slow"])


      const displayCohort = () => {
        return (
          <ul>
            {facts.map(cohort => (
              <li key={cohort.id}>
                
                  ID: {cohort.id}
                  <br></br>
                  Year: {cohort.year}
                  <br></br>
                  Name: {cohort.name}
                  <br></br>
                  <br></br>
                
              </li>
            ))}
          </ul>
        );
      };
      

    useEffect(()=>{
                // our code goes here
                fetch("http://127.0.0.1:8000/api/cohort/")
                .then((response)=>response.json())
                .then((data)=>{
                    setfacts(data.map(e=> e)) 
                })
                .catch(er=>console.log(er))
            }
        )
        return (
            <div>
              <h1>all cohorts</h1>
              <ul>{displayCohort()}</ul>
            </div>
          );
        }


export default CohortFacts;