import React from "react";

import SideDrawer from "../SideDrawer/SideDrawer";
import Navigation from "../../Navigation/Navigation";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const Appbar = props => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <SideDrawer>
                        <Navigation />
                    </SideDrawer>
                    <Typography variant="h6" className={classes.title}>
                        News
                </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
            <Toolbar variant="dense" />
        </>
    )
}

export default Appbar;