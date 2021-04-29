import React from "react";

// * UI Components
import Container from "@material-ui/core/Container";
import GridContainer from './../../components/UI/GridContainer/GridContainer';

const Layout = (props) => {
    return (
        <Container fixed>
            <GridContainer>
                {props.children}
            </GridContainer>
        </Container>
    );
}

export default Layout;