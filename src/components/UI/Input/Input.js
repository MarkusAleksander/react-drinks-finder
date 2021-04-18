import React from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

const Input = (props) => {

    let input = (<input
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onchange}
        />);

    if(props.labelText) {
        input = <label>{props.labelText}{input}</label>
    }
    
    return (
        <Auxillary>
            {input}
        </Auxillary>
    )
}

export default Input;