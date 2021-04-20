import React from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    name={props.name}
                    value={props.value}
                    onChange={props.onchange}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                />
            );
            break;
    }


    if (props.labelText) {
        inputElement = <label>{props.labelText}{inputElement}</label>
    }

    return (
        <Auxillary>
            {inputElement}
        </Auxillary>
    )
}

export default Input;