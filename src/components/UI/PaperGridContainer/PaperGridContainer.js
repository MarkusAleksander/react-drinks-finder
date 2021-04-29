import React from "react";

import PaperGridItem from "../PaperGridItem/PaperGridItem";
import GridContainer from "../GridContainer/GridContainer";

const PaperGridContainer = (props) => (
    <GridContainer>
        {
            React.Children.map(props.children, (child) => {
                return (
                    <PaperGridItem
                        sm={child.props.sm}
                        md={child.props.md}
                        lg={child.props.lg}
                        xl={child.props.xl}
                    >{child}</PaperGridItem>
                );
            })
        }
    </GridContainer>
);

export default PaperGridContainer;