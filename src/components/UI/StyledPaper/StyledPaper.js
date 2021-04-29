import React from "react";

// * UI Components
import Paper from "@material-ui/core/Paper";

// * create a style
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        padding: '8px 16px',
    },
});

const StyledPaper = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.paper}>
            {props.children}
        </Paper>
    );
}

export default StyledPaper;