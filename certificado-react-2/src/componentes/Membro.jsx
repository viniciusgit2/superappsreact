import React from "react";
import Grupo from "./Grupo";
export default (props)=>{
    return(
    <div>{Grupo.nome='joao'}<strong>{Grupo.sobrenome='silva'}</strong>
    {Grupo.nome='maria'}<strong>{Grupo.sobrenome='silva'}</strong>
    </div>
    )
}