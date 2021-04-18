import React from "react";

const Modal = (props) => {
    return (
        <div className="modal" onClick={props.onclick}>{props.children}</div>
    )
}

export default Modal;