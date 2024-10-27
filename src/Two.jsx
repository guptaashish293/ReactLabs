import React, { useState } from 'react'

export default function Two() {

    const  [countval, setCountVal] = useState(10);

  return (

  
    <div>
         
        <div>Two</div>
        <div>
            <button onClick={
                function(){
                    setCountVal(countval+1);
                }
            }>+</button>

            <span> {countval} </span>
            
            <button onClick={
                function(){
                    //console.log(countval);
                    setCountVal(countval-1);
                }
            }>-</button>
        </div>
    
    </div>

  )
}
