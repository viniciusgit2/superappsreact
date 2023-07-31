import React from "react";

export default  function Parouimpar(){
  const numero2=20
    const par=numero2%2 ==0
    return (<div>{par? <span>par</span>:<span>impar</span>}</div>)
}
