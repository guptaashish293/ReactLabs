import React, { useState } from 'react'

export default function EIght() {

    const [input,setInputText]=useState('');
    const [toDoList,setTODoValues]=useState([]);

  return (
    <div>
        <div>EIght</div>

        <input type='text' onChange={(e)=>{
           
            setInputText(e.target.value)

        }}/>
        <button onClick={()=>{
            setTODoValues([...toDoList,input]);
        }}>Add</button>

        <ul>
            {
                toDoList.map((todo,index)=>{
                  
                   return (
                    <div>
                        <li key={index}>{todo}</li>
                        <button key={index+'btn'} onClick={()=>{
                              debugger;
                          const filterToDo=  toDoList.filter((_todo,_index)=>{

                                if(index!==_index){
                                    return _todo;
                                }    
                                
                            });
                            setTODoValues(filterToDo);
                        }}>
                            Remove
                        </button>
                    </div>
                   ) 
                })
            }
        </ul>


    </div>
  )
}
