import React from "react";

import { useHistory } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const NavigationItem = props => {
    const history = useHistory();

    function handleClick() {
        history.push(props.url);
    }

    return (
        <ListItem button onClick={handleClick}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.navText} />
        </ListItem>
    )
}

export default NavigationItem;