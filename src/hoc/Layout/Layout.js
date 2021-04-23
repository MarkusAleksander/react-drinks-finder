import React from "react";

// * UI Components
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const Layout = (props) => {
    return (
        <Container fixed>
            <Paper elevation={5}>
                {props.children}
            </Paper>
        </Container>
    );
}

export default Layout;