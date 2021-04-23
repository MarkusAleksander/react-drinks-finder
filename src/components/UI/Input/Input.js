import React from "react";

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

const Input = props => {

    // * input
    let inputElement = null;

    switch (props.elementType) {
        case "input":
            // * standard input
            inputElement = (
                <TextField
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                    label={props.labelText}
                />
            );
            break;
        case "textarea":
            // * textarea
            inputElement = (
                <TextField
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                    label={props.labelText}
                    multiline={true}
                    rows={5}
                />
            );
            break;
        case "select":
            // * select box with options
            inputElement = (
                <>
                    {props.labelText ? <InputLabel htmlFor={props.name}>{props.labelText}</InputLabel> : null}
                    <NativeSelect
                        name={props.name}
                        id={props.name}
                        value={props.value}
                        onChange={props.changed}
                    >
                        {props.options.map((option) => (
                            <option value={option.value} key={option.value} disabled={option.disabled}>
                                {option.displayValue}
                            </option>
                        ))}
                    </NativeSelect>
                </>
            );
            break;
        default:
            // * return standard input
            inputElement = (
                <TextField
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.onchange}
                    label={props.labelText}
                />
            );
            break;
    }

    return (
        <FormControl>
            {inputElement}
        </FormControl>
    );
}

export default Input;