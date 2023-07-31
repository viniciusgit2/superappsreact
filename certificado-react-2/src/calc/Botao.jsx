import React from "react"


export default props => {
    let classes = 'Botao '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button
            onClick={e => props.click && props.onClick(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
