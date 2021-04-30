import React, { useState } from "react";

import Drawer from '@material-ui/core/Drawer';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';

const SideDrawer = props => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideDrawer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSideDrawer}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor={"left"} open={isOpen} onClose={toggleSideDrawer}>
                {
                    props.children
                }
            </Drawer>
        </>
    );
}

export default SideDrawer;