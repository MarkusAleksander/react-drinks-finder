import React from "react";

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import NavigationItem from "./NavigationItem/NavigationItem";

import HomeIcon from "@material-ui/icons/Home";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LockIcon from '@material-ui/icons/Lock';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Navigation = () => {
    return (
        <List>
            <NavigationItem
                url={"/"}
                navText={"Home"}
                icon={<HomeIcon />}
            />
            <NavigationItem
                url={"/drinks-builder"}
                navText={"Builder"}
                icon={<LocalBarIcon />}
            />
            <Divider />
            <NavigationItem
                url={"/login"}
                navText={"Login"}
                icon={<LockIcon />}
            />
            <NavigationItem
                url={"/register"}
                navText={"Register"}
                icon={<AddCircleIcon />}
            />
        </List>
    )
}

export default Navigation;