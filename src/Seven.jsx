import React, { useEffect, useState } from 'react'

export default function Seven() {
    
    const [timeLeft, setTimeLeftValue]=useState(60);


    useEffect(()=>{

        if(timeLeft>0)
        {
            const timer=setTimeout(()=>{

                setTimeLeftValue(timeLeft-1);

            },1000);

            return()=>  clearTimeout(timer);
        }

    })

    return (

        <div>{timeLeft} : Second</div>
    )
}
