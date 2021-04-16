import React from "react";

const Input = (props) => {
    return (
        <input
            name={props.name}
            type={props.type}
            onChange={props.onchange}
        />
    )
}

export default Input;