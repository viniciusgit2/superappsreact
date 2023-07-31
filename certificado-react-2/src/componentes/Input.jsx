import React, { useState }from "react";

export default  function Input(){
    const [valor,setvalor]=useState("inicial")
    function mudou(e){
    setvalor(e.target.value)
    console.log(e.target.value)
    }
    return (<div className="input">
        <h2>{valor}</h2>
        <input value={valor}onChange={mudou}/>
    </div>

    )
}

