import React from "react";

// * UI Components
import Button from '@material-ui/core/Button';

const PrimaryButton = props => {
    return (
        <Button
            onClick={props.onClick}
            disabled={props.disabled}
            color="primary"
            variant="contained"
        >{props.children}</Button>
    );
}

export default PrimaryButton;