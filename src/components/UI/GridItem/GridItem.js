import React from "react";

// * UI Components
import Grid from '@material-ui/core/Grid';

const GridItem = (props) => {

    return (
        <Grid item xs={12} {...props} />
    );
}

export default GridItem;