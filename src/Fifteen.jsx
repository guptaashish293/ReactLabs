import React, { useState } from 'react'

export default function Fifteen() {

    const items=[
        'ashish','Manish','Divya','Manoj','Dipaak','Amit','Pravin'
    ];
    
    const [SearchTerm,SetSearchTerm]=useState('');

    const filteredItem=items.filter((item)=>
        
        item.toLowerCase().includes(SearchTerm.toLowerCase())
    ) 

  return (
    <div>
        <div>Fifteen: search from araay (auto complete)</div>
        <div><input type='text' placeholder='Search....' onChange={(e)=>SetSearchTerm(e.target.value)}></input></div>
        <div>
            <ul>
                {
                    filteredItem.map((item,index)=>
                        (
                            <li key={index}>{item}</li>
                        )              
                    )
                }   
            </ul>
        </div>
    </div>
   
  )
}
