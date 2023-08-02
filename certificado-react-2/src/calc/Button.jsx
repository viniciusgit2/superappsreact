import React from "react"


export default props => {
    let classes=`button`
    classes+=props.operation ?`operation`:``
    return(
        <button onClick={e =>props.click&&props.click(e.target.innerHTML)} className={classes}>
            
        {props.label}
        </button>
    )
    }
    


