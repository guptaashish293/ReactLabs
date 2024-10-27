import React, { useState } from 'react'

export default function Nine() {

    const [backgroundColor,SetDivColor]=useState('green');

    const chnageMyColor=()=>{

        const divColor= backgroundColor==='green'?'red':'green';
        SetDivColor(divColor);
    }

  return (
    <div>
        <div>Nine</div>
        <div
            style={{
                backgroundColor,
                height:'100px',
                width:'100px'
            }}
            onClick={chnageMyColor}
        >Click on me to change color</div>
    </div>
    
  )
}
