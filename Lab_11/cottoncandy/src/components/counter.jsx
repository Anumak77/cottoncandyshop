import { useState } from "react";



function SomeComponent(){

    const [index, setIndex] = useState(0);



        return (
            <>
                <button onClick={(SomeComponent)=>{
                    setIndex(index + 1);
                }}
            >click me</button>
            <p>{index}</p>
            </>
        
        )
	
}

export default SomeComponent;