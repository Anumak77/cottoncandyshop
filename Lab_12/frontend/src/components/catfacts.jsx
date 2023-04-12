import { useState, useEffect } from "react";

function CatFacts(){
  const [facts, setFacts] = useState(["cats are cool", "cats are nice"]);

  const displayFacts = () => {
    return facts.map((elem, index) => <li key={index}>{elem}</li>);
  };

  useEffect(()=>{
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response=>response.json())
      .then(data=>{
        setFacts(data.map(e=>e.text)) 
      })
      .catch(err=>console.log(err))
  }, []);

  return (
    <ul>
      {displayFacts()}
    </ul>
  );
}

export default CatFacts;




