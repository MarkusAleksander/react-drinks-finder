import React from "react";

// * UI Components
import Container from "@material-ui/core/Container";

const Layout = (props) => {
    return (
        <Container fixed>
            {props.children}
        </Container>
    );
}

export default Layout;