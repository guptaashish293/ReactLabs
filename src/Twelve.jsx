import React, { useState } from 'react'

export default function Twelve() {

    const [uploadedFile,setUploadedFile]=useState(null);

    const fileuploadChange = (e)=>{

        setUploadedFile(e.target.files[0])

    }


  return (
    <div>
        <div>Twelve: File Upload</div>
        <div>
            <input type='file' accept='image/*' onChange={fileuploadChange}></input>
           {
             uploadedFile &&
                <img src={URL.createObjectURL(uploadedFile)} alt=''></img>
             
            } 
           
        </div>
    </div>
    
  )
}
