import React from "react";

// * UI Components
import Container from "@material-ui/core/Container";
import Appbar from "../../components/UI/Appbar/Appbar";

const Layout = (props) => {
    return (
        <>
            <Appbar />
            <Container fixed >
                {props.children}
            </Container>
        </>
    );
}

export default Layout;