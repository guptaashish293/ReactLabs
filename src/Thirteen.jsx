import React, { useState } from 'react'

export default function Thirteen() {

    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [isRegistered,setIsRegistered]=useState(false);



    const RegisterOrLogin = () =>{

        if(!isRegistered){

            setIsRegistered(true);

            localStorage.setItem("Email",Email);
            localStorage.setItem("Password",Password);

        }
        else{

            if( localStorage.getItem("Email")===Email && localStorage.getItem("Password")===Password){

                alert("Login Success");
            }
            else{
                alert("Login Failed");
            }

        }

    }

    const logout = ()=>{
        setIsRegistered(false);
        setEmail('');
        setPassword('');
        localStorage.setItem("Email",'');
        localStorage.setItem("Password",'');

    }


  return (
    <div>
        <div>Thirteen: Register and Login</div>

        <div>
            <div>Email <input type='text' value={Email} onChange={(e)=>setEmail(e.target.value)}></input></div>
            <div>Password <input type='text' value={Password} onChange={(e)=>setPassword(e.target.value)}></input></div>
            <div>
                <button onClick={RegisterOrLogin}>
                    { !isRegistered ? "Register":"Login" }
                </button>
            </div>
            <div>
            { isRegistered ? "welcome, "+ Email : "" }
            { isRegistered ? <button onClick={logout}>Log Out</button> : "" }
            </div>
        </div>

    </div>
    
  )
}
