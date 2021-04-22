import React from "react";

const Button = props => {

    // * prepare classname
    let className = "button";

    switch (props.type) {
        case "primary":
            className = className.concat(" is-primary");
            break;
        case "info":
            className = className.concat(" is-info");
            break;
        case "danger":
            className = className.concat(" is-danger");
            break;
        default:
            break;
    }

    return <button className={className} onClick={props.onclick} disabled={props.disabled}>{props.children}</button>;
}

export default Button;