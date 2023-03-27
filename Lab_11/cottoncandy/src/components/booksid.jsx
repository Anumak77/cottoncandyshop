import { useState, useEffect } from "react";

function Bookid({id}){
    const[books, setBooks] = useState({})

    const displayBooks= () => {
        return (
        <ul>
                <li>ID: {books.id}</li>
                <li>Title: {books.title}</li>
                <li>Author: {books.author}</li>
                <li>Category: {books.category}</li>
                <li>Year: {books.year}</li>
                <li>Number in inventory: {books.number_in_inventory}</li>
        </ul>
            );
      };
      

    useEffect(()=>{
                // our code goes here
                fetch("http://127.0.0.1:8000/apibook/" + id + "/")
                .then((response)=>response.json())
                .then((data)=>{
                    setBooks(data);// get the array of text out and set it as our state
                })
                .catch((err)=>console.log(err))
            }, [id]);
        
        return (
            <div>
              <h1>Book Facts {id}</h1>
              <ul>{displayBooks()}</ul>
            </div>
          );
        }


export default Bookid;





