import React, { useEffect, useState } from 'react'

export default function Six() {

    const [companies,setCompanyData]=useState(null);

    const fetchData = () =>{

        fetch('https://fake-json-api.mock.beeceptor.com/companies')
        .then((response) => response.json())
        .then((json)=>setCompanyData(json))
        
    }
    useEffect(()=>
        {
          
        }
    );

  return (

    <div>
        <div>Six</div>
        <button onClick={fetchData}>Get Data</button>
        {
           companies? ( 
                companies.map((data,index)=>{

                    console.log(data);
                    return ( 
                        <div>
                        <div><span>address :</span><span>{data.address}</span></div> 
                        <div><span>ceoName :</span><span>{data.ceoName}</span></div> 
                        <div><span>country :</span><span>{data.country}</span></div> 
                        <div><span>domain :</span><span>{data.domain}</span></div> 
                        <div><span>employeeCount :</span><span>{data.employeeCount}</span></div> 
                        <div><span>id :</span><span>{data.id}</span></div> 
                        <div><span>industry :</span><span>{data.industry}</span></div> 
                        <div><span>marketCap :</span><span>{data.marketCap}</span></div> 
                        <div><span>name :</span><span>{data.name}</span></div> 
                        <div><span>zip :</span><span>{data.zip}</span></div> 
                        <div><span>logo :</span><span><img alt='' src={data.log}></img></span></div> 
                        </div>
                    )
                })
            ):
            (
                <div>Data not found</div>
            )
        }
    </div>

  )
}
