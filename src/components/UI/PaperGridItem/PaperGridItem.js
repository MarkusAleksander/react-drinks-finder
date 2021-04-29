import React from "react";

// * UI Components
import GridItem from '../GridItem/GridItem';
import StyledPaper from "../StyledPaper/StyledPaper"

const PaperGridItem = (props) => (
    <GridItem {...props}>
        <StyledPaper>
            {props.children}
        </StyledPaper>
    </GridItem>
);


export default PaperGridItem;