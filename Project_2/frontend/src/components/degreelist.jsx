import { useState, useEffect } from "react";

function DegreeFacts(){
    const[facts, setfacts] = useState(["putting on the condom bby <3 pls be patient am slow"])

    const displayFacts = () => {
        return facts.map((elem, index) => 
        <li key={index}>{elem.full_name}
                        <br></br>
                        <br></br></li>)
      }
      

    useEffect(()=>{
                // our code goes here
                fetch("http://127.0.0.1:8000/api/degree/")
                .then((response)=>response.json())
                .then((data)=>{
                    setfacts(data.map(e=> e)) 
                })
                .catch(er=>console.log(er))
            }
        )
        return (
            <div>
              <h1>all degrees</h1>
              <ul>{displayFacts()}</ul>
            </div>
          );
        }


export default DegreeFacts;