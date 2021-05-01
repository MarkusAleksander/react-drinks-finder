import React from "react";

import { useLocation } from "react-router-dom";

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

    let location = useLocation();

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Home";
            case "/drinks-builder":
                return "Drinks Builder";
            case "/register":
                return "Register";
            case "/login":
                return "Login"
            default:
                return location.pathname;
        }
    }

    return (
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <SideDrawer>
                        <Navigation />
                    </SideDrawer>
                    <Typography variant="h6" className={classes.title}>{getPageTitle()}</Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
            <Toolbar variant="dense" />
        </>
    )
}

export default Appbar;