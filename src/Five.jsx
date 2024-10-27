import React, { useState } from 'react'

export default function Five() {

    const [isToggled,setTogetVal]=useState(false);

    const changeToggelVal = () =>{

        setTogetVal(!isToggled);

    };

  return (
    <div>
        Five
        <br></br>
        <label>
        <input type='checkbox' value={isToggled} onChange={changeToggelVal}></input>

        </label>
        <label>{isToggled? 'on' :'off'}</label>
    </div>
  )
}
