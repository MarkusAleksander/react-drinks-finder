import React from "react";

// * UI Components
import Grid from '@material-ui/core/Grid';

const GridContainer = (props) => (
    <Grid container spacing={2}>
        {props.children}
    </Grid>
);


export default GridContainer;