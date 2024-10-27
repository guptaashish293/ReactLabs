import React from 'react'

export default function Four() {

    const items=["Math","React","JS/Jquery","AngularJS","Angular",".Net","JAVA","SQL"]

  return (
    <div>Four
        <br></br>
        <ul>
            {
               items.map(function(value,index){

                    return  (<li key={index}>{value}</li>)

               })

            }
        </ul>

    </div>
  )
}
