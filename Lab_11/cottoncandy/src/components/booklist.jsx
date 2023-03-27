import { useState, useEffect } from "react";

function BookFacts(){
    const[facts, setFacts] = useState(["books", "books are nice"])

    const displayFacts = () => {
        return facts.map((elem, index) => 
        <li key={index}>{elem.title}</li>)
      }
      

    useEffect(()=>{
                // our code goes here
                fetch("http://127.0.0.1:8000/apibook/")
                .then((response)=>response.json())
                .then((data)=>{
                    setFacts(data.map((e)=>e)) 
                })
                .catch((err)=>console.log(err))
            }
        )
        return (
            <div>
              <h1>Book Facts</h1>
              <ul>{displayFacts()}</ul>
            </div>
          );
        }


export default BookFacts;