import React from "react";

// * UI Components
import Button from '@material-ui/core/Button';

// * create a style
import { makeStyles } from '@material-ui/core/styles';

const setAlignment = (alignment) => {
    switch (alignment) {
        case "left":
            return {
                display: "block",
                marginRight: "auto"
            };
        case "right":
            return {
                display: "block",
                marginLeft: "auto"
            };
        case "center":
            return {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
            };
        default:
            return {}
    }
}

const useStyles = makeStyles({
    alignment: (props) => (
        setAlignment(props.alignment)
    )
});

const PrimaryButton = props => {
    const classes = useStyles(props);

    return (
        <Button
            onClick={props.onClick}
            disabled={props.disabled}
            color="primary"
            variant="contained"
            className={classes.alignment}
        >{props.children}</Button>
    );
}

export default PrimaryButton;