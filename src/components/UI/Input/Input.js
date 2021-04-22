import React from "react";

const Input = props => {

    // * input
    let inputElement = null;

    switch (props.elementType) {
        case "input":
            // * standard input
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
            // * textarea
            inputElement = (
                <textarea
                    name={props.name}
                    value={props.value}
                    onChange={props.onchange}
                />
            );
            break;
        case "select":
            // * select box with options
            inputElement = (
                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.options.map((option) => (
                        <option value={option.value} key={option.value} defaultValue={option.selected}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            // * return standard input
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

    // * if label text is provided, wrap in label
    if (props.labelText) {
        inputElement = <label>{props.labelText}{inputElement}</label>
    }

    return inputElement
}

export default Input;