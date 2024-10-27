import React,{useState} from 'react'

export default function Three() {
    const [inputText, setInputTextValue] = useState('')
    return (
        <div>Three
            <br></br>
            <input type='text' value={inputText} onChange={
                function(e){
                    setInputTextValue(e.target.value);
                }
            } ></input>
            <br></br>
            <span>Input text : </span> <span>{inputText}</span>
        </div>
  )
}
